import { VehicleContext } from "@/contexts/VehicleContext";
import { useContext } from "react";

export const useVehicle = () => useContext(VehicleContext);
