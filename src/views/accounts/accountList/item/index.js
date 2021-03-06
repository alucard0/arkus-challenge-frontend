import React from 'react'

import Delete from './delete'
import Edit from './edit'

const Item = ({ name: accountName, client_name: clientName, id, manager_name: managerName }) => (
  <div className="accounts__item">
    <div className="accounts__information">
      <p>
        <span className="accounts__label">Account Name: </span>
        <span className="accounts__text">{accountName}</span>
      </p>
      <p>
        <span className="accounts__label">Client Name: </span>{' '}
        <span className="accounts__text">{clientName}</span>
      </p>
      <p>
        <span className="accounts__label">Manager Name: </span>{' '}
        <span className="accounts__text">{managerName || 'Not assigned'}</span>
      </p>
    </div>
    <div className="accounts__actions">
      <Edit id={id} />
      <Delete id={id} accountName={accountName} />
    </div>
  </div>
)

export default Item
