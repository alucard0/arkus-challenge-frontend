import { createSlice } from '@reduxjs/toolkit'
import API from '@api/user'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users:[],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = [ ...action.payload ]
    },
  },
})

export const fetchUsers = () => {
  return async (dispatch) => {
    await API.GetAll()
      .then(({ data }) => {
        const {users} = data
        dispatch(setUsers(users))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const deleteUser = (email) =>{
  return async (dispatch, getState) => {
    await API.DeleteUser(email)
      .then(() => {
        let { users } = getState()
        const newUserList  = updateUserList(users.users, email)

        dispatch(setUsers(newUserList))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const updateUserList =(users,currentEmail) =>{
 return users.filter(({email}) => email !== currentEmail )
}

export const { setUsers } = userSlice.actions

export default userSlice.reducer