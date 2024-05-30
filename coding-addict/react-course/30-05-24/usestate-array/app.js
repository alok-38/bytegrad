import { data } from "./data"; // Importing the data

const app = document.getElementById("app"); // Selecting the root DOM element

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // Initializing state with data

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); // Filtering out the person with the given id
    setPeople(newPeople); // Updating the state
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person; // Destructuring id and name from person object
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])} // Setting the state to an empty array to clear all items
      >
        clear items
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(app); // Creating a root for React
root.render(<UseStateArray />); // Rendering the UseStateArray component
