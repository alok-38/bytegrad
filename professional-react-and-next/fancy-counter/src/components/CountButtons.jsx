import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons() {
    return (
        <div className="flex gap-48 bg-[#1d2507] text-white h-[115px] w-[100%]">
          <button className="ml-[25%]">
          <MinusIcon className="count-btn-icon" />
          </button>
          <button>
          <PlusIcon className="count-btn-icon" />
          </button>
        </div>
    );
}