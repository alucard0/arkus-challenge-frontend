import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

const Edit = ({ email }) => {
  const navigate = useNavigate()

  const handleEditUser = () => {
    navigate(`/users/${email}/edit`)
  }

  return (
    <Button
      onClick={handleEditUser}
      color="secondary"
      type="button"
      size="medium"
      data-testid="button_edit"
      variant="contained"
    >
      Edit
    </Button>
  )
}

export default Edit
