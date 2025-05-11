"use client";

import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { VehicleLocation } from "@/types/Vehicle";
import { useVehicle } from "@/hooks/useVehicle";

const mapContentLayout = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: -22.4939016,
  lng: -47.4223525,
};

export default function Map() {
  const { apiReponse, isLoading } = useVehicle();
  const vehicleLocations = apiReponse?.locationVehicles;

  const [selectedVehicle, setSelectedVehicle] =
    useState<VehicleLocation | null>(null);

  const handleClickVehicle = (vehicleId: string) => {
    if (!vehicleLocations) return;
    const result = vehicleLocations.find(
      (vehicle: VehicleLocation) => vehicle.id === vehicleId
    );
    if (!result) return;
    setSelectedVehicle(result);
  };

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <GoogleMap
          mapContainerStyle={mapContentLayout}
          center={defaultCenter}
          zoom={13}
        >
          {isLoading && (
            <div className="h-[500px] w-full absolute inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="w-8 h-8 border-4 border-[#0095E4] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {vehicleLocations &&
            vehicleLocations.map((vehicle: VehicleLocation, index: number) => {
              const colorIndex = (index % 5) + 1;
              const lat = vehicle.lat;
              const lng = vehicle.lng;

              return (
                <Marker
                  key={index}
                  position={{ lat, lng }}
                  icon={{
                    url: `/markMap${colorIndex}.svg`,
                    scaledSize: new window.google.maps.Size(80, 80),
                  }}
                  onClick={() => handleClickVehicle(vehicle.id)}
                >
                  {selectedVehicle?.id === vehicle.id && (
                    <InfoWindow position={{ lat, lng }}>
                      <div className="bg-[#011927] p-3 rounded-lg text-white w-[300px] shadow-md text-center text-xl">
                        <p>Placa {vehicle.plate}</p>
                        <p>Frota {vehicle.fleet}</p>
                        <p>
                          {new Date(vehicle.createdAt).toLocaleString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </p>
                        <p
                          onClick={() => {
                            const url = `https://www.google.com/maps?q=${vehicle.lat},${vehicle.lng}`;
                            window.open(url, "_blank");
                          }}
                          className="underline hover:cursor-pointer"
                        >
                          {vehicle.lat} , {vehicle.lng}
                        </p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              );
            })}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
