import React, { useState } from 'react'
import { useAuth } from '../../views/login/utils'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

const pages = [
  { text: 'Users', id: 'users' },
  { text: 'Accounts', id: 'accounts' },
  { text: 'Teams', id: 'teams' },
]
const settings = [
  { text: 'Profile', id: 'profile' },
  { text: 'Logout', id: 'logout' },
]

const Header = ({ text }) => {
  const [anchorNav, setAnchorNav] = useState(null)
  const [anchorUser, setAnchorUser] = useState(null)
  let navigate = useNavigate()
  let auth = useAuth()

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null)
  }

  const handleMenuLinks = (id) => {
    switch (id) {
      case 'users':
        navigate('/users', { replace: true })
        break
      case 'accounts':
        navigate('/accounts', { replace: true })
        break
      case 'teams':
        navigate('/teams', { replace: true })
        break
      default:
        navigate('/', { replace: true })
    }

    handleCloseNavMenu()
  }

  const handleUserMenu = (id) => {
    switch (id) {
      case 'logout':
        signOut()
        break
      case 'profile':
        navigate('/profile', { replace: true })
        break
    }
    handleCloseUserMenu()
  }

  const handleCloseUserMenu = () => {
    setAnchorUser(null)
  }

  const signOut = () => {
    auth.signOut(() => {
      navigate('/login', { replace: true })
    })
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            LOGO
          </Typography>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            LOGO
          </Typography>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
