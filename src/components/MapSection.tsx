import { Map } from "@/components/Map";

export default function MapSection() {
  return (
    <div className="rounded-lg border border-[#001622] bg-[#011927] text-white font-semibold gap-10 p-2">
      <div className="mb-4">Mapa rastreador</div>
      <Map />
    </div>
  );
}
