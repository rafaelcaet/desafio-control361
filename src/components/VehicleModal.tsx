import { VehicleLocation } from "@/types/Vehicle";

type VehicleModalProps = {
  vehicle: VehicleLocation;
  onClose: () => void;
};

export const VehicleModal = ({ vehicle, onClose }: VehicleModalProps) => {
  return (
    <div className="fixed inset-0 bg-transparent rounded-lg bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg w-[400px]">
        <p>
          <strong>Placa:</strong> {vehicle.plate}
        </p>
        <p>
          <strong>Frota:</strong> {vehicle.fleet}
        </p>
        <p>
          <strong>Ignição:</strong> {vehicle.ignition}
        </p>
        <p>
          <strong>Equipamento:</strong> {vehicle.equipmentId}
        </p>
        <p>
          <strong>Latitude:</strong> {vehicle.lat}
        </p>
        <p>
          <strong>Longitude:</strong> {vehicle.lng}
        </p>

        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
