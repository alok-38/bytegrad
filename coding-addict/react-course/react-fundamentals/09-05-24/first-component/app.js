const app = document.getElementById("app");

const Greeting = () => {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(app);

root.render(<Greeting />);
