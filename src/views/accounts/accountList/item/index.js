import React from 'react'

//import Delete from './delete'
//import Edit from './edit'

const Item = ({ name: accountName, client_name:clientName, id }) => (
  <div className="accounts__item">
    <div className="accounts__information">
      <p>
        <span className="accounts__label">Account Name: </span>
        <span className="accounts__text">{accountName}</span>
      </p>
      <p>
        <span className="accounts__label">Client Name: </span> <span className="accounts__text">{clientName}</span>
      </p>
    </div>
    <div className="accounts__actions">
      {/*<Edit id={id} />
      <Delete id={id} />*/}
    </div>
  </div>
)

export default Item
