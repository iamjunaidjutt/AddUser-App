import React, { useState } from 'react'
import FormInputBox from './FormInputBox'
import ErrorModel from '../UI/ErrorModel'
import Card from '../UI/Card';
import Button from '../UI/Button';

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const addUserName = event => {
    setUserName(event.target.value);
  };
  const addUserAge = event => {
    setUserAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if(userName.trim().length <= 0 || userAge.trim().length <= 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid user name and age (non-empty values).',
      });
      return;
    }
    if(+userAge <= 0){
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid user age (non-negative value).',
      });
      return;
    }
    props.onAddUser({
      userName: userName,
      userAge: userAge
    });
    setUserName("");
    setUserAge("");
  };

  return (
    <>
    {error && <ErrorModel title={error.title} message={error.message} onErrorHandler={setError}/>}
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