import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from './teamSlice'

import TeamList from './teamList'

const Teams = ({ teamList, fetchTeams }) => {
  useEffect(() => {
    fetchTeams()
  }, [])

  return (
    <div className="teams__layout">
      <TeamList teamList={teamList} />
    </div>
  )
}

const mapStateToProps = ({ teams }) => {
  return { teamList: teams.teamList }
}

export default connect(mapStateToProps, { fetchTeams })(Teams)
