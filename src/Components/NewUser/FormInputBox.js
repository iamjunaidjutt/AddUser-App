import React from 'react'

const FormInputBox = (props) => {
  return (
    <div>
        <label for={props.title} className='block text-black font-bold py-1'>{props.title}</label>
        <input type={props.type}  className='w-full p-1 border-black border'/>
    </div>
  )
}

export default FormInputBox