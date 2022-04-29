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

export const { setUsers } = userSlice.actions

export default userSlice.reducer