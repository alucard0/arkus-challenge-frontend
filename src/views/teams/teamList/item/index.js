import React, { useState } from 'react'
import { prettyDate } from '@utils'

import Button from '@mui/material/Button'
import Profile from '../profile'

const Item = ({
  account_name: accountName,
  user_name: userName,
  email,
  team_name: teamName,
  init_date: initDate,
  end_date: endDate,
}) => {
  const [showProfile, setProfile] = useState(false)
  const buttonText = showProfile ? 'Hide profile' : 'Show profile'

  return (
    <div className="teams__item">
      <div className="team__general-information">
        <p>
          <span className="teams__label">Account Name: </span>
          <span className="teams__text">{accountName}</span>
        </p>
        <p>
          <span className="teams__label">Team Name: </span>{' '}
          <span className="teams__text">{teamName}</span>
        </p>
      </div>
      <div className="team__user-information">
        <p>
          <span className="teams__label">User Name: </span>{' '}
          <span className="teams__text">{userName}</span>
        </p>
        <p>
          <span className="teams__label">Start date: </span>{' '}
          <span className="teams__text">{prettyDate(initDate)}</span>
        </p>
        <p>
          <span className="teams__label">End date: </span>{' '}
          <span className="teams__text">{prettyDate(endDate)}</span>
        </p>
      </div>

      {showProfile && <Profile email={email} />}
      <Button
        variant="text"
        className="teams__profile-button"
        onClick={() => setProfile(!showProfile)}>
        {buttonText}
      </Button>
    </div>
  )
}
export default Item
