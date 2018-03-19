import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import style from './style'
import UserNav from './user-nav'
import BrokerNavcol from './broker-navcol'
import BrokerNavbar from './broker-navbar'
import ManagerNavcol from './manager-navcol'
import ClientDashboard from './client-dashboard'
import Assets from './assets'

export const Application = () => {
  return (
      <Switch>
        <Route path='/assets'>

          <div className='app-container min-height-100'>
            <ManagerNavcol className='app__navcol' />
            <div className='app-container__content'>
              <UserNav />
              <BrokerNavbar
                navItems={[
                  'Home', 'Assets', 'Transactions', 'Configuration', 'Alerts'
                ]}
                activeIndex={1}
                to='/' />
              <Assets />
            </div>
          </div>

        </Route>
        <Route path='/'>
          
          <div className='app-container min-height-100'>
            <BrokerNavcol className='app__navcol' />
            <div className='app-container__content'>
              <UserNav />
              <BrokerNavbar
                to='/assets' />
              <ClientDashboard />
            </div>
          </div>

        </Route>
      </Switch>
  )
}
