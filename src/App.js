import React, { useState } from 'react'
import InputForm from './Components/NewUser/InputForm'
import Users from './Components/Users/Users';

const App = () => {
  const usersList = [
    {
      id: 1,
      userName: 'John',
      userAge: 23,
    }
  ];
  const [addUser, setAddUser] = useState(usersList);

  const addNewUser = (user) => {
    setAddUser([
      ...addUser,
      {
        id: addUser.length + 1,
        userName: user.userName,
        userAge: user.userAge
      }
    ]);
  };
  
  return (
    <>
      <InputForm onAddUser={addNewUser}/>
      <Users usersList={addUser}/>
    </>
  )
}

export default App
