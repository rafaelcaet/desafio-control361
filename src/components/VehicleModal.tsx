import { InfoBox } from "@react-google-maps/api";

// ...

<InfoBox
  position={{ lat: vehicle.lat, lng: vehicle.lng }}
  onCloseClick={() => setOpenMarkerProps(false)}
  options={{
    closeBoxURL: "",
    enableEventPropagation: true,
    boxStyle: {
      background: "#011927",
      padding: "12px",
      borderRadius: "8px",
      color: "#fff",
      width: "300px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    },
  }}
>
  <div>
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
  </div>
</InfoBox>;
