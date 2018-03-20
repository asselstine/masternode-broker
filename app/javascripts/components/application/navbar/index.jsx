import React from 'react'
import FontAwesome from 'react-fontawesome'

import style from './style'

export default ({children}) => {
  return (
    <nav className="navbar broker-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-active">
        <div className='navbar-start'>
          {children}
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
