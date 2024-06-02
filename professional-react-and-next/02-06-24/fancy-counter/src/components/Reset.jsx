import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({ resetCount }) {
  return (
    <button onClick={resetCount} className="block mx-auto cursor-pointer">
      <ResetIcon />
    </button>
  );
}
