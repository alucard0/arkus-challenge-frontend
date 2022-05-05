import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAvailableUsers } from './managerSlice'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Manager = ({ fetchAvailableUsers, availableUsers, setNewManager }) => {
  const [selectedManager, setSelectedManager] = useState('')
  const options = availableUsers.map(({ name, email }) => ({ label: name, value: email }))

  useEffect(() => {
    fetchAvailableUsers()
  }, [])

  const onChange = (event, user) => {
    if (user) {
      const { value } = user
      setSelectedManager(value)
      setNewManager(value)
    } else {
      setSelectedManager('')
    }
  }

  return (
    <Autocomplete
      onChange={onChange}
      id="select-manager"
      options={options}
      isOptionEqualToValue={(option, value) => option.value === value.value}
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
