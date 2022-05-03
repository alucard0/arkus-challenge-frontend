import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../views/login/loginSlice'
import userReducer from '../views/users/userSlice'
import accountReducer from '../views/accounts/accountSlice'


export default configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer,
    account: accountReducer
  }
})
