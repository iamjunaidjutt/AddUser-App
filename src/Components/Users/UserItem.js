import React from 'react'

const UserItem = (props) => {
  return (
    <li className='border border-black p-1 my-1 text-black font-medium'>{props.userName} ({props.userAge} years old)</li>
  )
}

export default UserItem