import React, {
  Component
} from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import style from './style'

export default () => {
  return (
    <nav className="navbar is-sub" role="navigation" aria-label="main navigation">
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <NavLink className='navbar-item' to='/' exact={true} activeClassName='is-active'>Holdings</NavLink>
          <NavLink className='navbar-item' to='/clients' activeClassName='is-active'>Clients</NavLink>
          <NavLink className='navbar-item' to='/assets' activeClassName='is-active'>Assets</NavLink>
          <NavLink className='navbar-item' to='/pools' activeClassName='is-active'>Pools</NavLink>
          <NavLink className='navbar-item' to='/transactions' activeClassName='is-active'>Transactions</NavLink>
        </div>
      </div>
    </nav>
  )
}
