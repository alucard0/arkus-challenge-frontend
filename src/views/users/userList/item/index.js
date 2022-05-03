import React from 'react'

import Delete from './delete'
import Edit from './edit'

import { USER_ROLES } from '@utils/catalogs'

const Item = ({ name: userName, email, role }) => (
  <div className="users__item">
    <div className="users__information">
      <p>
        <span className="users__label">Name: </span>
        <span className="users__text">{userName}</span>
      </p>
      <p>
        <span className="users__label">Email: </span> <span className="users__text">{email}</span>
      </p>
      <p>
        <span className="users__label">Role: </span>{' '}
        <span className="users__text">{USER_ROLES[role]}</span>
      </p>
    </div>
    <div className="users__actions">
      <Edit email={email} />
      <Delete email={email} />
    </div>
  </div>
)

export default Item
