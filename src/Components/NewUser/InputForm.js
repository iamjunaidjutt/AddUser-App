import React, { useState } from 'react'
import FormInputBox from './FormInputBox'
import ErrorModel from '../UI/ErrorModel'
import Card from '../UI/Card';
import Button from '../UI/Button';

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const addUserName = event => {
    setUserName(event.target.value);
  };
  const addUserAge = event => {
    setUserAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if(userName.trim().length <= 0){
      setIsValid(false);
      return;
    }
    if(userAge.trim().length <= 0 || +userAge <= 0){
      setIsValid(false);
      return;
    }
    if(isValid){
      props.onAddUser({
        userName: userName,
        userAge: userAge
      });
      setUserName("");
      setUserAge("");
    }
  };

  return (
    <> 
    <ErrorModel title={"Invalid Input"} message={"Please correct it"}/>
    <form onSubmit={submitHandler} className='z-0'>
    <Card>
        <FormInputBox title="Username" value={userName} type="text" onChange={addUserName}/>
        <FormInputBox title="Age (Years)" value={userAge} type="number" onChange={addUserAge}/>
        <Button type="submit">Add User</Button>
    </Card>
    </form>
    </>
  )
}

export default InputForm;