export type VehicleLocation = {
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

export type Vehicle = {
  id: string;
  plate: string;
  fleet: string;
  type: string;
  model: string;
  nameOwner: string;
  status: string;
  createdAt: Date;
};

export type ResponseContext = {
  vehicles: Vehicle[];
  locationVehicles: VehicleLocation[];
};
