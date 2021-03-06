import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../../userSlice'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const Delete = ({ email, deleteUser }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteUser = () => {
    handleClose()
    deleteUser(email)
  }

  return (
    <>
      <Button
        type="button"
        size="medium"
        onClick={handleClickOpen}
        data-testid="button_delete"
        variant="contained"
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete user'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Would you like delete user with email ${email}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteUser} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default connect(null, { deleteUser })(Delete)
