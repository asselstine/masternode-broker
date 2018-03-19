import React from 'react'

import FontAwesome from 'react-fontawesome'
import style from './style'

export default (props) => {
  return (
    <nav className="navbar broker-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-active">
        <div className='navbar-start'>
          <a className='navbar-item is-uppercase is-size-7 has-text-weight-bold is-active'>
            Details
          </a>
          <a className='navbar-item is-uppercase is-size-7 has-text-weight-bold'>
            Analysis
          </a>
          <a className='navbar-item is-uppercase is-size-7 has-text-weight-bold'>
            Transactions
          </a>
          <a className='navbar-item is-uppercase is-size-7 has-text-weight-bold'>
            Reports
          </a>
          <a className='navbar-item is-uppercase is-size-7 has-text-weight-bold'>
            Portal
          </a>
          <a className='navbar-item is-uppercase is-size-7 has-text-weight-bold'>
            Files
          </a>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className="control has-icons-right">
              <input className="input" type="search" placeholder="Search" />
              <span className="icon is-small is-right">
                <FontAwesome name='search' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
