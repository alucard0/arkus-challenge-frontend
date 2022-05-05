import { createSlice } from '@reduxjs/toolkit'
import API from '@api/account'

const defaultAccount = {
  name: '',
  client_name: '',
  id: null,
  has_team: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accountList: [],
    accountData: {
      ...defaultAccount,
    },
  },
  reducers: {
    setAccountList: (state, action) => {
      state.accountList = [...action.payload]
    },
    setAccount: (state, action) => {
      state.accountData = { ...action.payload }
    },
    resetAccount: (state, action) => {
      state.accountData = { ...defaultAccount }
    },
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

export const fetchSingleAccount = (id) => {
  return async (dispatch) => {
    await API.GetSingleAccount(id)
      .then(({ data }) => {
        const { account } = data
        dispatch(setAccount(account))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const deleteAccount = (id) => {
  return async (dispatch, getState) => {
    await API.DeleteAccount(id)
      .then(() => {
        let {
          account: { accountList },
        } = getState()
        const newAccountList = updateAccountList(accountList, id)

        dispatch(setAccountList(newAccountList))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const updateAccountList = (accountList, currentId) => {
  return accountList.filter(({ id }) => id !== currentId)
}

export const createAccount = (newAccount, newManager) => {
  const { has_team: hasTeam } = newAccount
  let data = {
    account: newAccount,
  }
  if (hasTeam === 'true') {
    data.manager = newManager
  }
  return async (dispatch, getState) => {
    await API.CreateAccount(data).catch((error) => {
      console.error(error)
    })
  }
}

export const updateSingleAccount = (account) => {
  return async (dispatch, getState) => {
    await API.UpdateAccount(account).catch((error) => {
      console.error(error)
    })
  }
}

export const { setAccountList, setAccount, resetAccount } = accountSlice.actions

export default accountSlice.reducer
