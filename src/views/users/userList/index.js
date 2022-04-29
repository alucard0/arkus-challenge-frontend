import React from 'react'

import Item from './item'

const UserList =({users})=>{
  const emptyUsers =  users.length === 0

  if(emptyUsers){
    return <p>Users not found</p>
  }

  return(
    <div className="users__list">
      {
        users.map((user)=><Item key={user.email} {...user} />)
      }
    </div>
  )
}

export default UserList
