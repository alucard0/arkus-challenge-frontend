import React from 'react'

import Item from './item'

const AccountList =({accountList})=>{
  const emptyAccounts =  accountList.length === 0

  if(emptyAccounts){
    return <p>Accounts not found</p>
  }

  return(
    <div className="accounts__list">
      {
        accountList.map((account)=><Item key={account.id} {...account} />)
      }
    </div>
  )
}

export default AccountList
