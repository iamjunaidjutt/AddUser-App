import React from 'react'
import InputForm from './Components/NewUser/InputForm'
import Users from './Components/Users/Users';

const App = () => {
  const usersList = [
    {
      userName: 'John',
      userAge: 23,
    }
  ];
  
  return (
    <>
      <InputForm />
      <Users usersList={usersList}/>
    </>
  )
}

export default App
