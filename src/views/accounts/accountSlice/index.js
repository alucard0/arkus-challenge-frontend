import { createSlice } from '@reduxjs/toolkit'
import API from '@api/account'

const defaultAccount = {
  name: '',
  client_name: '',
  id: null,
  has_team: false,
}

const defaultManager = {
  name: '',
  email: '',
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accountList: [],
    accountData: {
      ...defaultAccount,
    },
    manager: {
      ...defaultManager,
    },
    team: [],
    teamName: '',
  },
  reducers: {
    setAccountList: (state, action) => {
      state.accountList = [...action.payload]
    },
    setAccount: (state, action) => {
      state.accountData = { ...action.payload }
    },
    setManager: (state, action) => {
      state.manager = { ...action.payload }
    },
    setTeam: (state, action) => {
      state.team = [...action.payload]
    },
    setTeamName: (state, action) => {
      state.teamName = action.payload
    },
    resetAccount: (state, action) => {
      state.accountData = { ...defaultAccount }
      state.team = []
      state.manager = { ...defaultManager }
      state.teamName = ''
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
        const { account, manager, team, team_name: teamName } = data

        dispatch(setAccount(account))
        if (!!manager) {
          dispatch(setManager(manager))
        }
        if (!!team) {
          dispatch(setTeam(team))
        }
        if (!!teamName) {
          const { name } = teamName
          dispatch(setTeamName(name))
        }
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

export const createAccount = (newAccount, newManager, newTeam) => {
  const { has_team: hasTeam } = newAccount
  let data = {
    account: newAccount,
  }
  if (hasTeam === 'true') {
    data.manager = newManager.value
    data.team = newTeam
  }
  return async (dispatch, getState) => {
    await API.CreateAccount(data).catch((error) => {
      console.error(error)
    })
  }
}

export const updateSingleAccount = (account,manager, team) => {
  return async (dispatch, getState) => {
    const { has_team: hasTeam } = account
    const{accountData:{has_team:hadTeam}} = getState().account

    let data = {
      account,
    }
    if (hasTeam === 'true') {
      data.manager = manager.value
      data.team = team
      data.action = hadTeam === 'true' ? 'update' : 'create'
    }
    
    await API.UpdateAccount(data).catch((error) => {
      console.error(error)
    })
  }
}

export const { setAccountList, setAccount, setTeam, setManager, setTeamName, resetAccount } =
  accountSlice.actions

export default accountSlice.reducer
