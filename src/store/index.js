import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../views/login/loginSlice'
import userReducer from '../views/users/userSlice'
import accountReducer from '../views/accounts/accountSlice'
import managerReducer from '../views/accounts/accountForm/manager/managerSlice'
import teamReducer from '../views/teams/teamSlice'


export default configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer,
    account: accountReducer,
    manager: managerReducer,
    teams:  teamReducer
  }
})
