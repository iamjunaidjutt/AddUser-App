import React from 'react'
import Card from '../UI/Card';
import UserItem from './UserItem';

const Users = (props) => {
  return (
    <Card>
        <ul>
          {props.usersList.map((user) => (<UserItem key={user.id} userName={user.userName} userAge={user.userAge} />))}
        </ul>
    </Card>
  )
}

export default Users