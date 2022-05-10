import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAvailableUsers } from './managerSlice'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Manager = ({
  fetchAvailableUsers,
  availableUsers,
  setNewManager,
  managerInfo,
  newManager,
}) => {
  const options = availableUsers.map(({ name, email }) => ({ label: name, value: email }))
  if (managerInfo.name !== '') {
    options.push({ label: managerInfo.name, value: managerInfo.email })
  }

  useEffect(() => {
    fetchAvailableUsers()
  }, [])

  const onChange = (event, user) => {
    if (user) {
      setNewManager(user)
    }
  }

  return (
    <Autocomplete
      value={newManager}
      onChange={onChange}
      id="select-manager"
      options={options}
      size="small"
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => <TextField required {...params} label="Account Manager" />}
    />
  )
}

const mapStateToProps = ({ manager }) => {
  return { availableUsers: manager.availableUsers }
}

export default connect(mapStateToProps, {
  fetchAvailableUsers,
})(Manager)
