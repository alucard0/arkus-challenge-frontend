import { createSlice } from '@reduxjs/toolkit'
import User from '@api/user'

const initialState = {
  token: '',
  role: '',
  email: '',
  errors: '',
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      const {
        payload: { token, role, email },
      } = action
      state.token = token
      state.role = role
      state.email = email
    },
    setErrors: (state, action) => {
      state.errors = action.payload
    },
    reset: () => initialState,
  },
})

export const fetchToken = (userData) => {
  return async (dispatch) => {
    await User.Login(userData)
      .then(({ data }) => {
        const { token, message, role, email } = data
        if (!!message) {
          dispatch(setErrors(message))
        } else {
          dispatch(setLoginInfo({ token, role, email }))
        }
      })
      .catch((error) => {
        const { message } = error.data
        dispatch(setErrors(message))
      })
  }
}

export const { setLoginInfo, setErrors, reset } = loginSlice.actions

export default loginSlice.reducer
