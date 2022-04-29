import React from 'react'
import { useLocalStorage } from '@customHooks'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const pages = [
  { text: 'Users', id: 'users' },
  { text: 'Accounts', id: 'accounts' },
  { text: 'Teams', id: 'teams' },
]

const GeneralMenu = ({ handleOpenNavMenu, handleCloseNavMenu, handleMenuLinks, anchorNav }) => {
  const [authToken, setAuthToken] = useLocalStorage('authToken')
  const { role } = authToken
  const isRegularUser = role === 'user'

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
        LOGO
      </Typography>
      {!isRegularUser && (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            {pages.map(({ text, id }) => (
              <MenuItem key={id} onClick={() => handleMenuLinks(id)}>
                <Typography textAlign="center">{text}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}

      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        LOGO
      </Typography>
      {!isRegularUser && (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ text, id }) => (
            <Button
              key={id}
              onClick={() => handleMenuLinks(id)}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              {text}
            </Button>
          ))}
        </Box>
      )}
    </>
  )
}

export default GeneralMenu
