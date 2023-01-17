import React from 'react'

const FormInputBox = (props) => {
  
  return (
    <div>
        <label htmlFor={props.title.toLowerCase()} className='block text-black font-bold py-1'>{props.title}</label>
        <input type={props.type} value={props.value}  className='w-full p-1 border-black border' onChange={props.onChange}/>
    </div>
  )
}

export default FormInputBox