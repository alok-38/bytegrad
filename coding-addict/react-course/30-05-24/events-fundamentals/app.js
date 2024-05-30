const app = document.getElementById("app");

const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };

  return (
    <section>
      <button onClick={handleButtonClick}>Click here</button>
    </section>
  );
};

const root = ReactDOM.createRoot(app);
root.render(<EventExamples />);
