import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function IncrementAndDecrement() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex">
        <button onClick={() => setCount((count) => count + 1)}>
          <FaArrowUp />
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          <FaArrowDown />
        </button>
      </div>
      <p>{count}</p>
    </>
  );
}
