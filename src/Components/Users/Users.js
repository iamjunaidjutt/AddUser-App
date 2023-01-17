import React from 'react'
import Card from '../UI/Card';
import UsersList from './UsersList';

const Users = (props) => {
  return (
    <Card>
        <ul>
            <UsersList list={props.usersList} />
        </ul>
    </Card>
  )
}

export default Users