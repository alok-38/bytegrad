import { useState } from "react";

export default function DecrementIncrement() {
    // Define state variable 'count' and its setter function 'setCount'
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Button to increment count */}
      <button onClick={incrementCount}>Increment</button>
      {/* Button to decrement count */}
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}