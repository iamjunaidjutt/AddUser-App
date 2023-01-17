import React from 'react'

const Button = props => {
  return (
    <button type={props.type} onClick={props.onClick} className='text-white font-medium bg-red-800 py-1 px-4 my-3 hover:bg-white hover:border-red-800 hover:text-red-800 border active:bg-red-400 active:text-white'>{props.children}</button>
  )
}

export default Button