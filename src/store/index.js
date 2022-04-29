import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../views/login/loginSlice'
import userReducer from '../views/users/userSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer 
  }
})
