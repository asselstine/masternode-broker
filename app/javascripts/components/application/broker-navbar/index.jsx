import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
import style from './style'

export default ({navItems}) => {

  navItems = navItems || [
    'Details',
    'Analysis',
    'Transactions',
    'Reports',
    'Portal',
    'Files'
  ]

  return (
    <nav className="navbar broker-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu is-active">
        <div className='navbar-start'>
          {navItems.map((item, index) => {
            return (
              <a key={item} className={classnames('navbar-item is-uppercase is-size-7 has-text-weight-bold', { 'is-active': index === 0 })}>
                {item}
              </a>
            )
          })}
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
