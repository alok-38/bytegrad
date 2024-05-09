const app = document.getElementById("app");

// arrow function also works

const Greeting = () => {
  return <h2>My First Component</h2>;
};


const root = ReactDOM.createRoot(app);

root.render(<Greeting />);
