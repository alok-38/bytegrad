const app = document.getElementById("app");

function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return (
    <div>
      <h2>Counter using useState</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<Counter />);
