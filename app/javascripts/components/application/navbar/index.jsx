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
      </div>
    </nav>
  )
}
