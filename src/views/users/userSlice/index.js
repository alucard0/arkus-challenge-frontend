import { createSlice } from '@reduxjs/toolkit'
import API from '@api/user'
import md5 from 'MD5'

const defaultUser = {
  email: '',
  name: '',
  password: '',
  english_level: '',
  url_cv: '',
  tech_knowledge: '',
  role: '',
}
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: {
      ...defaultUser,
    },
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = [...action.payload]
    },
    setUser: (state, action) => {
      state.user = { ...action.payload }
    },
    resetUser: (state, action) => {
      state.user = { ...defaultUser }
    },
  },
})

export const fetchUsers = () => {
  return async (dispatch) => {
    await API.GetAll()
      .then(({ data }) => {
        const { users } = data
        dispatch(setUsers(users))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const fetchSingleUser = (email) => {
  return async (dispatch) => {
    await API.GetSingleUser(email)
      .then(({ data }) => {
        const { users } = data
        dispatch(setUser(users))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const deleteUser = (email) => {
  return async (dispatch, getState) => {
    await API.DeleteUser(email)
      .then(() => {
        let { users } = getState()
        const newUserList = updateUserList(users.users, email)

        dispatch(setUsers(newUserList))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const updateUserList = (users, currentEmail) => {
  return users.filter(({ email }) => email !== currentEmail)
}

export const createUser = ({
  email,
  name,
  password,
  english_level,
  url_cv,
  tech_knowledge,
  role,
}) => {
  const newUser = {
    name,
    email,
    password: md5(password),
    english_level,
    url_cv,
    tech_knowledge,
    role,
  }
  return async (dispatch, getState) => {
    await API.CreateUser(newUser).catch((error) => {
      console.error(error)
    })
  }
}

export const updateSingleUser = (user) => {
  return async (dispatch, getState) => {
    await API.UpdateUser(user).catch((error) => {
      console.error(error)
    })
  }
}

export const { setUsers, setUser, resetUser } = userSlice.actions

export default userSlice.reducer
