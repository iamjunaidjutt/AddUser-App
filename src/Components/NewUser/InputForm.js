import React, { useState } from 'react'
import FormInputBox from './FormInputBox'
import Card from '../UI/Card';
import Button from '../UI/Button';

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const addUserName = event => {
    setUserName(event.target.value);
  };
  const addUserAge = event => {
    setUserAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser({
      userName: userName,
      userAge: userAge
    });
    setUserName("");
    setUserAge("");
  };

  return (
    <form onSubmit={submitHandler}>
    <Card>
        <FormInputBox title="Username" value={userName} type="text" onChange={addUserName}/>
        <FormInputBox title="Age (Years)" value={userAge} type="number" onChange={addUserAge}/>
        <Button type="submit">Add User</Button>
    </Card>
    </form>
  )
}

export default InputForm;