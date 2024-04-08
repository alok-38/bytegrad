// Timer.jsx
import { useState, useEffect, useRef } from 'react';
import StartTimer from './StartTimer';
import StopTimer from './StopTimer';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Start initially as not running
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setSeconds(0); // Reset seconds when starting the timer
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Timer:</h2>
      <p>{seconds} seconds have passed</p>
      {isRunning ? (
        <StopTimer onStop={handleStop} />
      ) : (
        <StartTimer onStart={handleStart} />
      )}
    </div>
  );
};

export default Timer;
