const app = document.getElementById("app");

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(`Input Name: ${e.target.name}`);
    console.log(`Input Value: ${e.target.value}`);
  };
  const handleButtonClick = () => {
    alert(`handle button click`);
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(`form submitted`);
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const root = ReactDOM.createRoot(app);
root.render(<EventExamples />);
