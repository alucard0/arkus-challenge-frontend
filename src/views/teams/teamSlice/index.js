import { createSlice } from '@reduxjs/toolkit'
import API from '@api/team'

export const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teamList: [],
  },
  reducers: {
    setTeamList: (state, action) => {
      state.teamList = [...action.payload]
    },
  },
})

export const fetchTeams = () => {
  return async (dispatch) => {
    await API.GetAll()
      .then(({ data }) => {
        const { teams } = data
        dispatch(setTeamList(teams))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const { setTeamList } = teamSlice.actions

export default teamSlice.reducer
