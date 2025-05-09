import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function InputSection() {
  return (
    <div className="flex items-center gap-10">
      <Input placeholder="Buscar por placa ou frota" />
      <Button className="bg-[#0095E4] w-[149px] hover:bg-[#0094e4ab] hover:cursor-pointer">
        Novo
      </Button>
    </div>
  );
}
