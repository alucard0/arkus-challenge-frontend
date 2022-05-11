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
  managerInfo,
  teamInfo,
  teamNameInfo,
}) => {
  const [newAccount, setNewAccount] = useState({
    ...account,
  })
  const [newManager, setNewManager] = useState(managerInfo)
  const [newTeam, setNewTeam] = useState({
    name: teamNameInfo,
    members: [],
  })
  const { name: teamName, members } = newTeam
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

  useEffect(() => {
    setNewTeam((prevTeam) => ({ ...prevTeam, name: teamNameInfo }))
  }, [teamNameInfo])

  useEffect(() => {
    const formattedTeamInfo = teamInfo.map(({ name, email }) => ({ label: name, value: email }))
    setNewTeam((prevTeam) => ({ ...prevTeam, members: formattedTeamInfo }))
  }, [teamInfo])

  useEffect(() => {
    const { name: label, email: value } = managerInfo
    setNewManager({ label, value })
  }, [managerInfo])

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
      updateSingleAccount(newAccount, newManager , newTeam)
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
        {hasTeam === 'true' && (
          <>
            <Manager
              setNewManager={setNewManager}
              managerInfo={managerInfo}
              newManager={newManager}
            />
            <Team setNewTeam={setNewTeam} teamName={teamName} members={members} />
          </>
        )}

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
  const { accountData, manager: managerInfo, team: teamInfo, teamName: teamNameInfo } = account
  return { account: accountData, managerInfo, teamInfo, teamNameInfo }
}

export default connect(mapStateToProps, {
  createAccount,
  fetchSingleAccount,
  resetAccount,
  updateSingleAccount,
})(AccountForm)
