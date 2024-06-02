import React from 'react'
import User from './User'

const UsersList = ({users}) => {
  return (
    <div>
        {users.map((user) => (<User user={user}/>))}
    </div>
  )
}

export default UsersList 
