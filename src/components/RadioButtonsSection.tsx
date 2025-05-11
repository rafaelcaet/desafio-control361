"use client";

import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useVehicle } from "@/hooks/useVehicle";

export default function RadioButtonSection() {
  const { filterType, setFilterType } = useVehicle();

  const handleChange = (value: string) => {
    const mapped = value === "outros" ? "others" : "tracked";
    setFilterType(mapped);
  };

  return (
    <div>
      <RadioGroup
        value={filterType === "tracked" ? "rastreados" : "outros"}
        onValueChange={handleChange}
        className="flex gap-[14px]"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="rastreados" id="rastreados" />
          <Label htmlFor="rastreados">Rastreados</Label>
        </div>
        <div className="flex items-center space-x-4">
          <RadioGroupItem value="outros" id="outros" />
          <Label htmlFor="outros">Outros</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
