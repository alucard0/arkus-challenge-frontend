import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAccounts } from './accountSlice'
import { useNavigate } from 'react-router-dom'

import AccountList from './accountList'
import Button from '@mui/material/Button'

const Accounts = ({ accountList, fetchAccounts }) => {
  let navigate = useNavigate()

  useEffect(() => {
    fetchAccounts()
  }, [])

  const handleNewAccount = () => {
    navigate('/accounts/new')
  }

  return (
    <div className="accounts__layout">
      <Button
        className={'accounts__button-new-account'}
        type="button"
        size="medium"
        onClick={handleNewAccount}
        data-testid="button_new_account"
        variant="contained"
      >
        New account
      </Button>
      <AccountList accountList={accountList} />
    </div>
  )
}

const mapStateToProps = ({ account }) => {
  return { accountList: account.accountList }
}

export default connect(mapStateToProps, { fetchAccounts })(Accounts)
