import { createSlice } from '@reduxjs/toolkit'
import User from '@api/user'

const initialState = {
  refresh: '',
  access: '',
  errors:[]
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      const {payload: {refresh,access}} = action
      state.refresh =  refresh 
      state.access = access
    },
    setErrors:(state,action) => {
     state.errors =[...action.payload]
    },
    reset: () => initialState
  },
})

export const fetchToken = (userData) => {
  return async (dispatch) => {
    await User.Login(userData)
      .then(({ data }) => {
        const { refresh, access, errors } = data
        if(!!errors){
          dispatch(setErrors(errors))
        } else {
          dispatch(setLoginInfo({ refresh, access }))
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const { setLoginInfo, setErrors, reset } = loginSlice.actions

export default loginSlice.reducer
