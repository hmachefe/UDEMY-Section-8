import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/UI/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const userAddedHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, { name: uName, age: uAge, id: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser onUserAdded={userAddedHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
