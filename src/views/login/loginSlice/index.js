import { createSlice } from '@reduxjs/toolkit'
import User from '@api/user'

const initialState = {
  token: '',
  errors: '',
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      const {
        payload: { token },
      } = action
      state.token = token
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
        const { token, message } = data
        if (!!message) {
          dispatch(setErrors(message))
        } else {
          dispatch(setLoginInfo({ token }))
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
