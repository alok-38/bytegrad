import { useState } from 'react';

const Decrement = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
