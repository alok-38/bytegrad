const app = document.getElementById("app");

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

const root = ReactDOM.createRoot(app);
root.render(<Greeting />);
