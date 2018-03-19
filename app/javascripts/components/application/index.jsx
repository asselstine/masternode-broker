import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import style from './style'
import UserNav from './user-nav'
import Navcol from './navcol'
import BrokerNavbar from './broker-navbar'
import ClientDashboard from './client-dashboard'

export const Application = () => {
  return (
    <div className='columns is-gapless min-height-100'>
      <Navcol className='app__navcol' />
      <div className='column'>
        <UserNav />
        <BrokerNavbar />
        <ClientDashboard />
      </div>
    </div>
  )
}
