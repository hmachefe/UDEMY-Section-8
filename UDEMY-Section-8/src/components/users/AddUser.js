import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid user parameters",
        message: "enter correct user name and user age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "user age must be >= 0",
      });
      return;
    }
    // console.log(enteredUsername + " - " + enteredAge);
    props.onUserAdded(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const resetErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={resetErrorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </div>
  );
};

export default AddUser;
