import { ResetIcon } from "@radix-ui/react-icons";
import { useState } from "react";
export default function Reset({ resetCount }) {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <button onClick={resetCount} className="block mx-auto cursor-pointer">
      <ResetIcon />
    </button>
  );
}
