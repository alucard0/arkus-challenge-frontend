import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../../users/userSlice'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Team = ({ fetchUsers, users, setNewTeam, teamName, members }) => {
  const options = users.map(({ name, email }) => ({ label: name, value: email }))

  useEffect(() => {
    fetchUsers()
  }, [])

  const onChangeTeamMembers = (event, members) => {
    setNewTeam((prevTeam) => ({
      ...prevTeam,
      members,
    }))
  }

  const onChangeTeamName = (event) => {
    const { value } = event.target
    setNewTeam((prevTeam) => ({
      ...prevTeam,
      name: value,
    }))
  }

  return (
    <>
      <TextField
        data-testid="team-name"
        fullWidth
        size="small"
        label="Team Name"
        type="text"
        value={teamName}
        onChange={onChangeTeamName}
        required
      />
      <Autocomplete
        value={members}
        multiple
        onChange={onChangeTeamMembers}
        id="select-team-members"
        options={options}
        getOptionLabel={(option) => option.label}
        size="small"
        isOptionEqualToValue={(option, value) => option.label === value.label}
        renderInput={(params) => <TextField {...params} label="Team members" />}
      />
    </>
  )
}

const mapStateToProps = ({ users }) => {
  return { users: users.users }
}

export default connect(mapStateToProps, {
  fetchUsers,
})(Team)
