import React ,{useState}  from "react";
import Buttom from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
const [enteredUsername, setEnteredUsername] = useState('');
const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      return;
    }
    if(+enteredAge<0){
      return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const changeUsernameHandler=(event)=>{
    setEnteredUsername(event.target.value);
  };
  const changeAgeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }

  return (
    <div>
    <ErrorModal title="An error occured!" message="Something went wrong!" />
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label for='username'>username</label>
      <input id="username" type="text" value={enteredUsername} onChange={changeUsernameHandler}></input>
      <label for='age' >age</label>
      <input id="age" type="number" value={enteredAge} onChange={changeAgeHandler}></input>
      <Buttom type="submit">add</Buttom>
    </form>
    </Card>
    </div>
  );
};

export default AddUser;
