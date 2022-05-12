import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { fetchToken } from './loginSlice'
import { connect } from 'react-redux'
import { useAuth } from './utils'
import md5 from 'MD5'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login = ({ loginInformation, fetchToken }) => {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()
  let [userData, setUserData] = useState({
    email: 'test2@example.com',
    password: 'test',
  })
  const { email, password } = userData
  let from = '/profile'
  const hasError = !!loginInformation.errors.length > 0
  const errorMessage = hasError ? loginInformation.errors : ''

  useEffect(() => {
    if (!!loginInformation.token) {
      const { errors, ...userInformation } = loginInformation
      auth.signIn(userInformation, () => {
        navigate(from, { replace: true })
      })
    }
  }, [loginInformation])

  if (location.state) {
    if (location.state.from) {
      if (location.state.from.pathname) {
        from = location.state.from.pathname
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchToken({ email, password: md5(password) })
  }

  const onChangeFields = (field) => (event) => {
    const { value } = event.target
    setUserData((prevUserData) => ({ ...prevUserData, [field]: value }))
  }

  return (
    <div className={'login'}>
      <p className={'login__title'}>Login</p>
      <form onSubmit={handleSubmit} className={'login__form'}>
        <TextField
          data-testid="email"
          fullWidth
          size="small"
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={onChangeFields('email')}
          required
          autoComplete={'email'}
          helperText={errorMessage}
          error={hasError}
        />
        <TextField
          id="password"
          size="small"
          label="Password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={onChangeFields('password')}
        />
        <Button type="submit" size="medium" data-testid="button_submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ login }) => ({ loginInformation: login })

export default connect(mapStateToProps, { fetchToken })(Login)
