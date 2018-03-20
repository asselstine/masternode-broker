import React from 'react'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

import Navbar from './navbar'

export default () => {
  var classes = 'navbar-item is-uppercase is-size-7 has-text-weight-bold'

  return (
    <Navbar>
      <NavLink to='/' exact={true} className={classes} activeClassName='is-active'>Home</NavLink>
      <NavLink to='/clients' className={classes} activeClassName='is-active'>Clients</NavLink>
      <NavLink to='/assets' className={classes} activeClassName='is-active'>Assets</NavLink>
      <NavLink to='/pools' className={classes} activeClassName='is-active'>Pools</NavLink>
      <NavLink to='/transactions' className={classes} activeClassName='is-active'>Transactions</NavLink>
      <NavLink to='/config' className={classes} activeClassName='is-active'>Config</NavLink>
      <NavLink to='/alerts' className={classes} activeClassName='is-active'>Alerts</NavLink>
    </Navbar>
  )
}
