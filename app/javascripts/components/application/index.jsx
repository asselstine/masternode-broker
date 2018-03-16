import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import style from './style'
import Navcol from './navcol'
import BrokerNavbar from './broker-navbar'
import ClientDashboard from './client-dashboard'

export const Application = () => {
  return (
    <div className='columns is-gapless'>
      <Navcol className='app__navcol' />
      <div className='column'>
        <nav className="navbar app__navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu is-active">
            <div className='navbar-end'>
              <div className='navbar-item has-dropdown'>
                <a className="navbar-link has-text-right">
                  <span className='is-uppercase has-text-weight-semibold is-size-7'>User Account</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <BrokerNavbar />
        <ClientDashboard />
      </div>
    </div>
  )
}
