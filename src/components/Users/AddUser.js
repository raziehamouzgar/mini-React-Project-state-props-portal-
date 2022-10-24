import React ,{useState}  from "react";
import Buttom from "../UI/Buttom";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {
const [enteredUsername, setEnteredUsername] = useState('');
const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    // enteredUsername="";
    // enteredAge="";
    console.log(enteredUsername,enteredAge)
  };

  const changeUsernameHandler=(event)=>{
    setEnteredUsername(event.target.value);
  };
  const changeAgeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label>username</label>
      <input type="text" value={enteredUsername} onChange={changeUsernameHandler}></input>
      <label>age</label>
      <input type="number" value={enteredAge} onChange={changeAgeHandler}></input>
      <Buttom type="submit">add</Buttom>
    </form>
    </Card>
  );
};

export default AddUser;
