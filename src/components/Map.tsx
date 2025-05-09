"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Truck } from "lucide-react";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: -22.4939016,
  lng: -47.4223525,
};

type Vehicle = {
  id: string;
  fleet: string;
  equipmentId: string;
  name: string;
  plate: string;
  ignition: string;
  lat: number;
  lng: number;
  createdAt: Date;
};

export const Map = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const handleClickVehicle = (vehicleId: string) => {
    const result = vehicles.find((vehicle) => vehicleId === vehicle.id);
    if (!result) return;
    setSelectedVehicle(result);
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}?type=tracked&page=2`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data);
        setVehicles(data.content.locationVehicles);
      } catch (err) {
        console.error("Erro ao buscar veículos:", err);
      }
    };

    fetchVehicles();

    const interval = setInterval(fetchVehicles, 120000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={13}
      >
        {vehicles.map((vehicle, index) => {
          const colorIndex = (index % 5) + 1;
          return (
            <Marker
              icon={{
                url: `/markMap${colorIndex}.svg`,
                scaledSize: new window.google.maps.Size(80, 80),
              }}
              onClick={() => handleClickVehicle(vehicle.id)}
              key={vehicle.id}
              position={{ lat: vehicle.lat, lng: vehicle.lng }}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};
