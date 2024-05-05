import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Buttons() {
  return (
    <button className="text-[#bdfe00] opacity-90 flex gap-48 mx-auto items-center justify-center hover:bg-[#212b06] focus:bg-[#212b06]">
      <MinusIcon className="count-btn-icon count-btn--plus h-[40px] w-[40px] cursor-pointer transition-all" />
      <PlusIcon className="count-btn--plus count-btn-icon h-[40px] w-[40px] cursor-pointer transition-all" />
    </button>
  );
}
