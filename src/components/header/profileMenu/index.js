import React from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

const settings = [
  { text: 'Profile', id: 'profile' },
  { text: 'Logout', id: 'logout' },
]

const ProfileMenu = ({ handleOpenUserMenu, handleCloseUserMenu, handleUserMenu, anchorUser }) => (
  <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorUser)}
      onClose={handleCloseUserMenu}>
      {settings.map(({ text, id }) => (
        <MenuItem key={id} onClick={() => handleUserMenu(id)}>
          <Typography textAlign="center">{text}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
)

export default ProfileMenu
