import React from 'react'
import { render } from 'react-dom'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

import './scss/main.scss'
import Login from './views/login'
import AuthProvider from './views/login/authProvider'
import RequireAuth from './views/login/requireAuth'

import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="ingresar" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <p>test</p>
                </RequireAuth>
              }
            />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>,
  rootElement,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
