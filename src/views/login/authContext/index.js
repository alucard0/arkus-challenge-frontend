import { createContext } from 'react'

export const AuthContext = createContext({
  hasSession: false,
  signIn: () => {},
  signOut: () => {},
})
