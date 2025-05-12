import { VehicleLocation } from "@/types/Vehicle";

type VehicleModalProps = {
  vehicle: VehicleLocation;
  onClose: () => void;
};

export const VehicleModal = ({ vehicle, onClose }: VehicleModalProps) => {
  return (
    <div className="fixed inset-0 bg-transparent rounded-lg bg-opacity-20 flex items-center justify-center z-50">
      <div className="flex font-normal flex-col bg-[#011927] p-6 rounded-lg w-[400px] items-center justify-centers">
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
        <div className="flex underline hover:cursor-pointer hover:font-medium">
          <p>
            {vehicle.lat} ,{vehicle.lng}
          </p>
        </div>

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
