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
import ManagerNavbar from './manager-navbar'
import AssetNavcol from './asset-navcol'
import ClientDashboard from './client-dashboard'
import CreateAssetForm from './create-asset-form'
import CreateAssetConfirmation from './create-asset-confirmation'
import CreateAssetSuccess from './create-asset-success'
import AssetDetails from './asset-details'
import Assets from './assets'
import Home from './home'

export const Application = () => {
  return (
      <Switch>
        <Route path='/assets/new'>
          <div className='app-container min-height-100'>
            <AssetNavcol />
            <div className='app-container__content'>
              <UserNav />
              <ManagerNavbar />
              <CreateAssetForm />
            </div>
          </div>
        </Route>

        <Route path='/assets/confirm'>
          <div className='app-container min-height-100'>
            <AssetNavcol />
            <div className='app-container__content'>
              <UserNav />
              <ManagerNavbar />
              <CreateAssetConfirmation />
            </div>
          </div>
        </Route>

        <Route path='/assets/na123/success'>
          <div className='app-container min-height-100'>
            <AssetNavcol />
            <div className='app-container__content'>
              <UserNav />
              <ManagerNavbar />
              <CreateAssetSuccess />
            </div>
          </div>
        </Route>

        <Route path='/assets'>
          <div className='app-container min-height-100'>
            <AssetNavcol />
            <div className='app-container__content'>
              <UserNav />
              <ManagerNavbar />
              <Assets />
            </div>
          </div>
        </Route>

        <Route path='/asset-details'>
          <div className='app-container min-height-100'>
            <AssetNavcol />
            <div className='app-container__content'>
              <UserNav />
              <ManagerNavbar />
              <AssetDetails />
            </div>
          </div>
        </Route>

        <Route path='/'>
          <div className='app-container min-height-100'>
            <ManagerNavcol className='app__navcol' />
            <div className='app-container__content'>
              <UserNav />
              <ManagerNavbar />
              <Home />
            </div>
          </div>
        </Route>
      </Switch>
  )
}
