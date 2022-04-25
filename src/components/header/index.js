import React from "react"
import { useAuth } from '../../views/login/utils'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

const Header= ({text})=>{
  let navigate = useNavigate()
  let auth = useAuth()
  const signOut = ()=>{
    auth.signOut(() => {
      navigate('/', { replace: true })
    })
  }

return <header className="header">
  <h1 className="header__title">{text}</h1>
  <Button size="medium" 
  data-testid="button_cerrar_sesion" variant="contained" 
  onClick={signOut}>
          Cerrar sesión
  </Button>
  </header>
}

export default Header
