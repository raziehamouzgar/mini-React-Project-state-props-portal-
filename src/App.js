import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from 'react';

function App() {
  const[userList,setUserList]=useState([]);

  const addUserHandler= (uName, uAge)=>{
    setUserList((preventDefault)=>{
      return[...preventDefault , {name:uName , age:uAge ,id:Math.random().toString() }]
    })
  }
  return (
    <div className="App">
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={userList}/>
    </div>
  );
}

export default App;
