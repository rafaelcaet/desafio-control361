import RadioButtonSection from "./RadioButtonsSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FilterSectionProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function FilterSection({
  search,
  setSearch,
}: FilterSectionProps) {
  return (
    <div className="flex gap-3 text-white justify-between my-[27.5px]">
      <div className="flex gap-34 items-center">
        <span className="font-semibold">Lista</span>
        <RadioButtonSection />
      </div>
      <div className="flex items-center gap-10">
        <Input
          placeholder="Buscar por placa ou frota"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="bg-[#0095E4] w-[149px] hover:bg-[#0094e4ab] hover:cursor-pointer">
          Novo
        </Button>
      </div>
    </div>
  );
}
