import React, { useState } from 'react'
import { useAuth } from '../../views/login/utils'
import { useNavigate } from 'react-router-dom'

import GeneralMenu from './generalMenu'
import ProfileMenu from './profileMenu'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

const Header = () => {
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
          <GeneralMenu
            handleCloseNavMenu={handleCloseNavMenu}
            handleMenuLinks={handleMenuLinks}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorNav={anchorNav}
          />
          <ProfileMenu 
            handleCloseUserMenu={handleCloseUserMenu}
            handleOpenUserMenu={handleOpenUserMenu}
            handleUserMenu={handleUserMenu}
            anchorUser={anchorUser}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
