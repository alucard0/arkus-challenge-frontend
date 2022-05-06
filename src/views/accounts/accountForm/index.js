import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  createAccount,
  fetchSingleAccount,
  resetAccount,
  updateSingleAccount,
} from '../accountSlice'
import { isEmptyObject } from '@utils'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Manager from './manager'
import Team from './team'

const AccountForm = ({
  createAccount,
  fetchSingleAccount,
  account,
  resetAccount,
  updateSingleAccount,
}) => {
  const [newAccount, setNewAccount] = useState({
    ...account,
  })
  const [newManager, setNewManager] = useState('')
  const [newTeam, setNewTeam] = useState({
    name:'',
    members:[]
  })
  const {name:teamName} = newTeam
  const { name, client_name: clientName, has_team: hasTeam } = newAccount
  const navigate = useNavigate()
  const params = useParams()
  const isCreate = isEmptyObject(params)
  const title = isCreate ? 'Create new account' : 'Edit account'
  const primaryButtonText = isCreate ? 'Create' : 'Update'

  useEffect(() => {
    if (!isCreate) {
      const { id } = params
      fetchSingleAccount(id)
    }
    return () => {
      resetAccount()
    }
  }, [])

  useEffect(() => {
    setNewAccount({ ...account })
  }, [account])

  const onChangeFields = (field) => (event) => {
    const { value } = event.target
    setNewAccount((prevAccountData) => ({ ...prevAccountData, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isCreate) {
      createAccount(newAccount, newManager, newTeam).then(() => {
        navigate(-1)
      })
    } else {
      updateSingleAccount(newAccount)
    }
  }

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className="accounts__layout">
      <p className="accounts__title">{title}</p>
      <form onSubmit={handleSubmit} className={'accounts__form'}>
        <TextField
          data-testid="name"
          fullWidth
          size="small"
          label="Account Name"
          type="text"
          value={name}
          onChange={onChangeFields('name')}
          required
        />
        <TextField
          data-testid="client_name"
          fullWidth
          size="small"
          label="Client name"
          type="text"
          value={clientName}
          onChange={onChangeFields('client_name')}
          required
        />

        <FormControl>
          <FormLabel id="team-configuration">Would you like add manager and team?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="team-configuration"
            name="team-configuration-chooser"
            value={hasTeam}
            onChange={onChangeFields('has_team')}>
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        {hasTeam === 'true' && <><Manager setNewManager={setNewManager} />
          <Team setNewTeam={setNewTeam} teamName={teamName}/>
        </>}

        <div className="accounts__form-actions">
          <Button
            type="button"
            size="medium"
            onClick={handleCancel}
            data-testid="button_submit"
            variant="contained"
            className="accounts__form-submit">
            Cancel
          </Button>
          <Button
            type="submit"
            color="secondary"
            size="medium"
            data-testid="button_submit"
            variant="contained"
            className="accounts__form-submit">
            {primaryButtonText}
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ account }) => {
  return { account: account.accountData }
}

export default connect(mapStateToProps, {
  createAccount,
  fetchSingleAccount,
  resetAccount,
  updateSingleAccount,
})(AccountForm)
