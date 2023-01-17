import React from 'react'
import FormInputBox from './FormInputBox'
import Card from '../UI/Card';
import Button from '../UI/Button';

const InputForm = () => {
  return (
    <Card>
        <FormInputBox title="Username" type="text"/>
        <FormInputBox title="Age (Years)" type="text"/>
        <Button type="submit" onClick={null}>Add User</Button>
    </Card>
  )
}

export default InputForm;