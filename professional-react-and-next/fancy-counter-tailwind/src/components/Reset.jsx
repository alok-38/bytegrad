import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset() {
  return (
    <button className="reset-btn cursor-pointer opacity-30 hover:opacity-50 focus:opacity-55">
      <ResetIcon className="reset-btn-icon text-[#1d2507] h-[40px] w-[40px]" />
    </button>
  );
}
