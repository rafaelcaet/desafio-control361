"use client";
import { useVehicle } from "@/hooks/useVehicle";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";
import { Vehicle } from "@/types/Vehicle";

export default function TableSection() {
  const { apiReponse } = useVehicle();
  const vehicles = apiReponse?.vehicles;
  return (
    <div className="text-white font-semibold">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-sm font-semibold">
              Placa
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Frota
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Tipo
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Modelo
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles &&
            vehicles.map((vehicle: Vehicle, index: number) => (
              <TableRow key={index}>
                <TableHead className="text-center text-sm font-light text-white/60">
                  {vehicle.plate}
                </TableHead>
                <TableHead className="text-center text-sm font-light text-white/60">
                  {vehicle.fleet}
                </TableHead>
                <TableHead className="text-center text-sm font-light text-white/60">
                  {vehicle.type}
                </TableHead>
                <TableHead className="text-center text-sm font-light text-white/60">
                  {vehicle.model}
                </TableHead>
                <TableHead className="text-center text-sm font-light text-white/60">
                  {vehicle.status}
                </TableHead>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
