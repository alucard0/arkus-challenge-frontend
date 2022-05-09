import React from 'react'

import Item from './item'

const TeamList = ({ teamList }) => {
  const emptyTeams = teamList.length === 0

  if (emptyTeams) {
    return <p>Teams not found</p>
  }

  return (
    <div className="teams__list">
      {teamList.map((member) => (
        <Item key={`${member.account_name}_${member.email}`} {...member} />
      ))}
    </div>
  )
}

export default TeamList
