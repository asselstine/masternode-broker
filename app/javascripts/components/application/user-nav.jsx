import React from 'react'

export default (props) => {
  return (
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
  )
}
