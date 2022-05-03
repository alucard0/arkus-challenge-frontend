import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../userSlice'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { ENGLISH_LEVELS, USER_ROLES } from '@utils/catalogs'

const NewUserForm = ({ createUser }) => {
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    password: '',
    englishLevel: '',
    urlCv: '',
    techKnowledge: '',
    role: '',
  })
  const { name, email, password, englishLevel, urlCv, techKnowledge, role } = newUser
  const englishLevelKeys = Object.keys(ENGLISH_LEVELS)
  const roleKeys = Object.keys(USER_ROLES)
  const navigate = useNavigate()

  const onChangeFields = (field) => (event) => {
    const { value } = event.target
    setNewUser((prevUserData) => ({ ...prevUserData, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    createUser(newUser).then(() => {
      navigate(-1)
    })
  }

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className="users__layout">
      <p className="users__title">Create new user</p>
      <form onSubmit={handleSubmit} className={'users__form'}>
        <TextField
          data-testid="name"
          fullWidth
          size="small"
          label="Name"
          type="text"
          value={name}
          onChange={onChangeFields('name')}
          required
        />
        <TextField
          data-testid="email"
          fullWidth
          size="small"
          label="Email"
          type="email"
          value={email}
          onChange={onChangeFields('email')}
          required
        />
        <TextField
          data-testid="password"
          size="small"
          fullWidth
          label="Password"
          type="password"
          value={password}
          required
          onChange={onChangeFields('password')}
        />
        <FormControl fullWidth>
          <InputLabel id="english-level" required>English level</InputLabel>
          <Select
            labelId="english-level"
            value={englishLevel}
            label="English level"
            onChange={onChangeFields('englishLevel')}
            data-testid="englishLevel">
            {englishLevelKeys.map((key) => (
              <MenuItem key={key} value={key}>
                {ENGLISH_LEVELS[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          data-testid="urlCV"
          fullWidth
          size="small"
          label="Resume link"
          type="text"
          value={urlCv}
          onChange={onChangeFields('urlCv')}
          required
        />
        <FormControl fullWidth>
          <InputLabel id="role" required>Role</InputLabel>
          <Select
            labelId="role"
            value={role}
            label="Role"
            onChange={onChangeFields('role')}
            data-testid="role">
            {roleKeys.map((key) => (
              <MenuItem key={key} value={key}>
                {USER_ROLES[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          data-testid="techKnowledge"
          fullWidth
          size="small"
          label="Tech knowledge"
          type="text"
          value={techKnowledge}
          onChange={onChangeFields('techKnowledge')}
          required
          multiline
          minRows={2}
          maxRows={4}
          inputProps={{
            maxLength: 500,
          }}
        />
        <div className="users__form-actions">
          <Button
            type="button"
            size="medium"
            onClick={handleCancel}
            data-testid="button_submit"
            variant="contained"
            className="users__form-submit">
            Cancel
          </Button>
          <Button
            type="submit"
            color="secondary"
            size="medium"
            data-testid="button_submit"
            variant="contained"
            className="users__form-submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, { createUser })(NewUserForm)
