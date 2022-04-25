import React, { useState } from 'react'

import { AuthContext } from '../authContext'
import { useLocalStorage } from '@customHooks'
import { reset } from '../loginSlice'
import { useDispatch } from 'react-redux'

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage('authToken',{access:'', refresh:''})
  let [hasSession, setSession] = useState(!!authToken.access)
  const dispatch = useDispatch()

  let signIn = async(token, callback) => {
    await setAuthToken(token)
    setSession(!!token.access)
    callback()
  }

  let signOut = async(callback) => {
    await setAuthToken({access:'', refresh:''})
    dispatch(reset())
    callback()
  }

  let value = { hasSession, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
