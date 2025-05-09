import InputSection from "./InputSection";
import RadioButtonSection from "./RadioButtonsSection";

export default function FilterSection() {
  return (
    <div className="flex gap-3 text-white justify-between my-[27.5px]">
      <div className="flex gap-34 items-center">
        <span className="font-semibold">Lista</span>
        <RadioButtonSection />
      </div>
      <InputSection />
    </div>
  );
}
