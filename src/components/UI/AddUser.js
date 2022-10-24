import React ,{useState}  from "react";

const AddUser = (props) => {
const [enteredUsername, setEnteredUsername] = useState();
const [enteredAge, setEnteredAge] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    setEnteredUsername="";
    setEnteredAge="";
  };

  return (
    <form onSubmit={addUserHandler}>
      <label>username</label>
      <input type="text" value={enteredUsername}></input>
      <label>age</label>
      <input type="number" value={enteredAge}></input>
    </form>
  );
};

export default AddUser;
