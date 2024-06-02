import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount((prevCount) => prevCount - prevCount);
  };

  return (
    <div>
      <button onClick={incrementCount}>
        <FaArrowUp />
      </button>
      <span onClick={resetCount} className="block">
        {count}
      </span>
      <button onClick={decrementCount}>
        <FaArrowDown />
      </button>
    </div>
  );
}
