const UserList = ({ users }) => {
  // Filter users who are active
  const activeUsers = users.filter((user) => user.isActive);
  return (
    <div>
      <h1>Active Users</h1>
      <ul>
        {activeUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
