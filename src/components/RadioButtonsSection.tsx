import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function RadioButtonSection() {
  return (
    <div>
      <RadioGroup defaultValue="rastreados" className="flex gap-[14px]">
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
