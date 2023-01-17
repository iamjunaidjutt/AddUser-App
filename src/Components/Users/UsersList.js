import React from 'react'

const UsersList = (props) => {
  return (
    <>
        {props.list.map((user) => (<li className='border border-black p-1 my-1 text-black font-medium'>{user.userName} ({user.userAge} years old)</li>))}
    </>
  )
}

export default UsersList