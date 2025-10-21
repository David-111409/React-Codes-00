// I want to make a program to take 2 numbers from the user and display their sum.
import React, { useState } from "react";
const usersData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", isActive: true },
  { id: 2, name: "Bob Smith", email: "bob@example.com", isActive: false },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    isActive: true,
  },
];

function App() {
  const [users, setUsers] = useState(usersData);
  //   const [num1, setNum1] = useState(0);
  //   const [num2, setNum2] = useState(0);
  //   const [sum, setSum] = useState(0);
  //   const handleSum = () => {
  //     setSum(+num1 + +num2);
  //   };
  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         value={num1}
  //         onChange={(e) => setNum1(e.target.value)}
  //       />
  //       <input
  //         type="text"
  //         value={num2}
  //         onChange={(e) => setNum2(e.target.value)}
  //       />
  //       {/* <button onClick={() => handleSum()}>Calculate Sum</button> */}
  //       <h2>
  //         {!num1 || !num2
  //           ? "Please enter numbers and press Calculate Sum"
  //           : `Sum: ${num1} + ${num2} = ${+num1 + +num2}`}
  //       </h2>
  //     </div>
  //   );
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  function toggleActiveStatus(userId) {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, isActive: !user.isActive };
      }
      return user;
    });
    setUsers(updatedUsers);
  }
  function handleActiveButton() {
    setShowActiveOnly(!showActiveOnly);
  }
  const visibleUsers = showActiveOnly
    ? users.filter((user) => user.isActive)
    : users;
  return (
    <div>
      <button onClick={handleActiveButton}>show acitves only</button>
      <h1>User List</h1>
      <ul>
        {visibleUsers.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Status: {user.isActive ? "🟢 Active" : "🔴 Inactive"}</p>
            <button onClick={() => toggleActiveStatus(user.id)}>toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
