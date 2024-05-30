const { useState } = React;

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    setPerson({
      name: "john",
      age: 28,
      hobby: "sprinkle at the computer",
    });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

ReactDOM.render(<UseStateObject />, document.getElementById("app"));
