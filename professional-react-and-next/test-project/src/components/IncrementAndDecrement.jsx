import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function IncrementAndDecrement() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center flex-col items-center mt-60">
      <div className="flex gap-10 mb-5 text-5xl">
        <button className="text-green-500" onClick={() => setCount((count) => count + 1)}>
          <FaArrowUp />
        </button>
        <button className="text-orange-500" onClick={() => setCount((count) => count - 1)}>
          <FaArrowDown />
        </button>
      </div>
      <p className="text-7xl text-slate-700">{count}</p>
    </div>
  );
}
