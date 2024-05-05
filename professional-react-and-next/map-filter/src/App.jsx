import UserList from "./components/UserList";

const App = () => {
  // Example array of users
  const users = [
    { id: 1, name: "John", isActive: true },
    { id: 2, name: "Alice", isActive: false },
    { id: 3, name: "Bob", isActive: true },
    { id: 4, name: "Eve", isActive: false },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
