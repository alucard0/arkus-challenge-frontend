import React from 'react'
import { useAuth } from '../utils'
import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  let auth = useAuth()
  let location = useLocation()

  if (!auth.hasSession) {
    return <Navigate to="/ingresar" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
