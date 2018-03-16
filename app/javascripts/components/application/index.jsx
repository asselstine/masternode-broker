import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import style from './style'
import Navcol from './navcol'
import BrokerNavbar from './broker-navbar'

export const Application = () => {
/* Tabbar code

<div className='columns app__tabbar'>
  <div className='column'>
    <div className="tabs">
      <ul>
        <li className="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>
  </div>
  <div className='app__tabbar__search'>
    <div className="control has-icons-left has-icons-right">
      <input className="input" type="search" placeholder="Search" />
      <span className="icon is-small is-left">
        <FontAwesome name='envelope' />
      </span>
      <span className="icon is-small is-right">
        <FontAwesome name='check' />
      </span>
    </div>
  </div>
</div>
*/



  return (
    <section>
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
        </div>
      </div>
    </section>
  )
}
