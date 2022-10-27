import React, { useState, useRef } from "react";
import Buttom from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value ='';
    ageInputRef.current.value ='';
  };

  // const changeUsernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const changeAgeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label for="username">username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label for="age">age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Buttom type="submit">add</Buttom>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
