import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchSingleUser, resetUser } from '../../../users/userSlice'

import Link from '@mui/material/Link'

const Profile = ({ email, fetchSingleUser, resetUser, user }) => {
  const [infoUser, setInfoUser] = useState(user)

  const { english_level: englishLevel, tech_knowledge: techKnowledge, url_cv: urlCv } = infoUser

  useEffect(() => {
    fetchSingleUser({ email })
    return () => {
      resetUser()
    }
  }, [])

  useEffect(() => {
    if (email === user.email) {
      setInfoUser(user)
    }
  }, [user])

  return (
    <div className="teams__profile">
      <p>
        <span className="teams__label">Email: </span> <span className="teams__text">{email}</span>
      </p>
      <p>
        <span className="teams__label">English Level: </span>{' '}
        <span className="teams__text">{englishLevel}</span>
      </p>
      <p>
        <span className="teams__label">Tech Knowledge: </span>{' '}
        <span className="teams__text">{techKnowledge}</span>
      </p>
      <Link href={urlCv} target="_blank" rel="noopener" underline="hover">
        Resume
      </Link>
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return { user: users.user }
}

export default connect(mapStateToProps, {
  fetchSingleUser,
  resetUser,
})(Profile)
