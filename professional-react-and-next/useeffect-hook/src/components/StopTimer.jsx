const StopTimer = ({ onStop }) => {
  const handleClick = () => {
    onStop();
  };

  return (
    <button onClick={handleClick}>
      Stop Timer
    </button>
  );
};

export default StopTimer;