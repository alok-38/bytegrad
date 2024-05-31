const app = document.getElementById("app");

function Header({ title }) {
  return (
    <div className="text-center mt-10 mb-10">
      <h1 className="text-5xl font-bold text-clifford">
        {title ? title : "Default title"}
      </h1>
    </div>
  );
}

function HomePage() {
  return <Header title="Develop. Preview. Ship!" />;
}

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="text-center">
      <HomePage />
      <button className="text-7xl" onClick={increment}>
        +
      </button>
      <span className="block text-7xl">{count}</span>
      <button className="text-7xl" onClick={decrement}>
        -
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<App />);
