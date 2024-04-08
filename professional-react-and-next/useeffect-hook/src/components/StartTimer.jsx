import { useEffect } from 'react';

const StartTimer = ({ onStart }) => {
  useEffect(() => {
    onStart();
  }, [onStart]);

  return null;
};

export default StartTimer;
