import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@components/header'

const AppLayout = () => (
  <>
    <Header text={'test'} />
    <Outlet />
  </>
)

export default AppLayout
