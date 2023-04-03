import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUSer = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername + " - " + enteredAge);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    setEnteredAge("");
    setEnteredUsername("");
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={changeUsernameHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type="submit">Add User Hugo</Button>
      </form>
    </Card>
  );
};

export default AddUSer;
