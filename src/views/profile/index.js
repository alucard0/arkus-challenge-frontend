import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useLocalStorage } from '@customHooks'
import { fetchSingleUser, resetUser, updateSingleUser } from '../users/userSlice'
import { createAlert } from '@components/alert/alertSlice'

import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Profile = ({ fetchSingleUser, updateSingleUser, resetUser, user }) => {
  const [authToken, setAuthToken] = useLocalStorage('authToken')
  const dispatch = useDispatch()
  const { email } = authToken
  const { name, english_level: englishLevel, tech_knowledge: techKnowledge, url_cv: urlCv } = user
  const [newTechKnowledge, setNewTechKnowledge] = useState(techKnowledge)

  useEffect(() => {
    fetchSingleUser({ email })
    return () => {
      resetUser()
    }
  }, [])

  useEffect(() => {
    setNewTechKnowledge(techKnowledge)
  }, [user])

  const onChangeFields = (event) => {
    const { value } = event.target
    setNewTechKnowledge(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = { ...user }
    newUser['tech_knowledge'] = newTechKnowledge
    updateSingleUser(newUser).then(() => {
      dispatch(
        createAlert({
          message: 'Profile saved',
          type: 'success',
        }),
      )
    })
  }

  return (
    <div className="profile__layout">
      <form onSubmit={handleSubmit} className="profile__container">
        <p>
          <span className="profile__label">Name: </span>{' '}
          <span className="profile__text">{name}</span>
        </p>
        <p>
          <span className="profile__label">Email: </span>{' '}
          <span className="profile__text">{email}</span>
        </p>
        <p>
          <span className="profile__label">English Level: </span>{' '}
          <span className="profile__text">{englishLevel}</span>
        </p>
        <TextField
          data-testid="tech_knowledge"
          fullWidth
          size="small"
          label="Tech knowledge"
          type="text"
          value={newTechKnowledge}
          onChange={onChangeFields}
          required
          multiline
          minRows={2}
          maxRows={4}
          inputProps={{
            maxLength: 500,
          }}
        />
        <Link href={urlCv} target="_blank" rel="noopener" underline="hover">
          Resume
        </Link>

        <Button
          type="submit"
          color="secondary"
          size="medium"
          data-testid="button_submit"
          variant="contained"
          className="profile__submit"
        >
          Save
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return { user: users.user }
}

export default connect(mapStateToProps, {
  fetchSingleUser,
  resetUser,
  updateSingleUser,
})(Profile)
