import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

export default function IncrementAndDecrement() {
  const [count, setCount] = useState(0);
  const resetCount = () => {
    // Optionally, add a confirmation prompt here
    setCount(0);
  };
  return (
    <div className="flex justify-center flex-col items-center mt-60">
      {count === 5 && (
        <div className="mb-5 text-3xl text-cyan-600">
          You&apos;ve reached 5! Time to celebrate!
        </div>
      )}
      <div className="flex gap-10 mb-5 text-5xl">
        <button
          className="text-green-500"
          onClick={() => setCount((count) => count + 1)}
          disabled={count === 5}
        >
          <FaArrowUp />
        </button>
        <button className="text-red-500" onClick={resetCount}>
          <MdRefresh />
        </button>
        <button
          className="text-orange-500"
          onClick={() => setCount((count) => count - 1)}
          disabled={count === 0}
        >
          <FaArrowDown />
        </button>
      </div>
      <p className="text-7xl text-slate-700">{count}</p>
    </div>
  );
}
