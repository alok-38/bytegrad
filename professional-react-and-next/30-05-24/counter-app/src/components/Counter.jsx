import { useState } from "react";

function Counter() {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const resetCounts = () => {
    setCountUp(0);
    setCountDown(0);
    // No need to manage countReset state
  };

  return (
    <>
      <div className="card">
        <button onClick={() => setCountUp((count) => count + 1)}>
          countUp is {countUp}
        </button>
        <button onClick={() => setCountDown((count) => count - 1)}>
          countDown is {countDown}
        </button>
        <button onClick={resetCounts}>Reset Counts</button>
      </div>
    </>
  );
}

export default Counter;
