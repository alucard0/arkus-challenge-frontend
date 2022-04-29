import React, {useEffect} from "react"
import { connect } from 'react-redux'
import { fetchUsers } from './userSlice'

import UserList from "./userList"

const Users =({users,fetchUsers})=>{
  useEffect(() => {
    fetchUsers()
  }, [])


  return (
    <div className="users__layout">
      <UserList users={users}/>
    </div>
    
  )
}


const mapStateToProps = ({users}) => {
  
  return users
}

export default  connect(mapStateToProps, { fetchUsers })(Users)

