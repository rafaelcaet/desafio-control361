"use client";

import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { VehicleModal } from "./VehicleModal";
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
  const { apiReponse } = useVehicle();
  const vehicleLocations = apiReponse?.locationVehicles;

  const [openMarkerProps, setOpenMarkerProps] = useState(false);
  const [selectedVehicle, setSelectedVehicle] =
    useState<VehicleLocation | null>(null);

  const handleClickVehicle = (vehicleId: string) => {
    if (!vehicleLocations) return;
    const result = vehicleLocations
      ? vehicleLocations.find(
          (vehicle: VehicleLocation) => vehicle.id === vehicleId
        )
      : null;
    if (!result) return;
    setSelectedVehicle(result);
    setOpenMarkerProps(true);
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
          {vehicleLocations &&
            vehicleLocations.map((vehicle: VehicleLocation, index: number) => {
              const colorIndex = (index % 5) + 1;
              return (
                <Marker
                  key={index}
                  position={{ lat: vehicle.lat, lng: vehicle.lng }}
                  icon={{
                    url: `/markMap${colorIndex}.svg`,
                    scaledSize: new window.google.maps.Size(80, 80),
                  }}
                  onClick={() => handleClickVehicle(vehicle.id)}
                />
              );
            })}
        </GoogleMap>
      </LoadScript>

      {openMarkerProps && selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setOpenMarkerProps(false)}
        />
      )}
    </>
  );
}
