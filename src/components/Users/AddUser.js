import React ,{useState}  from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {
const [enteredUsername, setEnteredUsername] = useState();
const [enteredAge, setEnteredAge] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    setEnteredUsername="";
    setEnteredAge="";
  };

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label>username</label>
      <input type="text" value={enteredUsername}></input>
      <label>age</label>
      <input type="number" value={enteredAge}></input>
    </form>
    </Card>
  );
};

export default AddUser;
