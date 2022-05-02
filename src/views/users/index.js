import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './userSlice'
import { useNavigate } from 'react-router-dom'

import UserList from './userList'
import Button from '@mui/material/Button'

const Users = ({ users, fetchUsers }) => {
  let navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleNewUser  =()=>{
    navigate('/users/new')
  } 

  return (
    <div className="users__layout">
      <Button
        className={'users__button-new-user'}
        type="button"
        size="medium"
        onClick={handleNewUser}
        data-testid="button_new_user"
        variant="contained">
        New user
      </Button>
      <UserList users={users} />
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return users
}

export default connect(mapStateToProps, { fetchUsers })(Users)
