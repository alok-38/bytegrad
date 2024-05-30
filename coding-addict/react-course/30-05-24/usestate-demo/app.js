const app = document.getElementById("app");

const UseStateBasics = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>You clicked {count} times.</h4>
      <button onClick={handleClick}>Count up</button>
    </div>
  );
};

const root = ReactDOM.createRoot(app);
root.render(<UseStateBasics />);
