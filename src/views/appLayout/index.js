import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@components/header'
import AlertArea from '@components/alert'

const AppLayout = () => (
  <>
    <Header text={'test'} />
    <Outlet />
    <AlertArea/>
  </>
)

export default AppLayout
