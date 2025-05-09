import FilterSection from "@/components/FilterSection";
import MapSection from "@/components/MapSection";
import TableSection from "@/components/TableSection";

export default function Home() {
  return (
    <div className="flex flex-col mx-16 my-[27.5px] gap-6">
      <div className="border-b border-[#002D44]">
        <FilterSection />
      </div>
      <div className="border rounded-lg border-[#002d44]">
        <MapSection />
      </div>
      {/* <div className="border rounded-lg border-[#002d44]"> */}
      <TableSection />
      {/* </div> */}
    </div>
  );
}
