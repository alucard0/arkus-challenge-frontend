import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../views/login/loginSlice'

export default configureStore({
  reducer: {
    login:loginReducer
  }
})
