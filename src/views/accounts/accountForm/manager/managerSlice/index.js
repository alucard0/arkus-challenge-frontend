import { createSlice } from '@reduxjs/toolkit'
import API from '@api/manager'

export const managerSlice = createSlice({
  name: 'manager',
  initialState: {
    availableUsers: [],
  },
  reducers: {
    setAvailableUsers: (state, action) => {
      state.availableUsers = [...action.payload]
    },
  },
})

export const fetchAvailableUsers = () => {
  return async (dispatch) => {
    await API.GetAllAvailableUsers()
      .then(({ data }) => {
        const { users } = data
        dispatch(setAvailableUsers(users))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const { setAvailableUsers } = managerSlice.actions

export default managerSlice.reducer
