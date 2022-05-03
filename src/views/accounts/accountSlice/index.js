import { createSlice } from '@reduxjs/toolkit'
import API from '@api/account'

const defaultAccount = {
  name:'',
  client_name:'',
  id:null
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accountList: [],
    account: {
      ...defaultAccount,
    },
  },
  reducers: {
    setAccountList: (state, action) => {
      state.accountList = [...action.payload]
    },
    setAccount: (state, action) => {
      state.account = { ...action.payload }
    },
    resetAccount: (state, action) => {
      state.account = { ...defaultAccount }
    }
  },
})

export const fetchAccounts = () => {
  return async (dispatch) => {
    await API.GetAll()
      .then(({ data }) => {
        const { accounts } = data
        dispatch(setAccountList(accounts))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const { setAccountList, setAccount, resetAccount } = accountSlice.actions

export default accountSlice.reducer