import { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  // useEffect with no dependencies, runs after every render
  useEffect(() => {
    console.log("Effect ran");
    // Cleanup function
    return () => {
      console.log("Cleanup ran");
    };
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
