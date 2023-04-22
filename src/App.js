import { useState } from 'react';
import './App.css';
import UserForm from './Components/User/Form/Form';
import UsersList from './Components/User/List/List';

function App() {
  const [users,setUsers] = useState([
    {
    username:'Mark Magdy' ,
    age:26,
    key:Math.random() 
  },
  {
    username:'John Doe' ,
    age:22,
    key:Math.random() 
  },
  {
    username:'Liza Doe' ,
    age:29,
    key:Math.random() 
  }
  ])
  const addUserHandler = (username,age) =>{
    setUsers((prevUsers)=>{
      return [...prevUsers,{username:username ,age:age,key:Math.random() }]
    })
  }
  const removeUserHandler = (key) =>{
    const filteredUsers = users.filter((user)=> user.key !== key)
    setUsers(filteredUsers)
  }
  return (
    <div className='users__container'>
    {users.length === 0 ? <h1 style={{textAlign: 'center'}}>There No Users</h1> : <UsersList users={users} onRemoveUser={removeUserHandler}/>}
      <UserForm onAddUser={addUserHandler}/>
    </div>
  );
}

export default App;
