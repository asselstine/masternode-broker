import React from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import Navcol from '../navcol'
import NavcolMenu from '../navcol-menu'
import NavcolHeader from '../navcol-header'

export default (props) => {
  return (
    <Navcol className='app__navcol'>
      <NavcolHeader title='Node Manager' />
      <NavcolMenu title='' items={[]} activeIndex={0}>
        <li><NavLink className='has-text-weight-bold' to='/' exact={true} activeClassName='is-active'><FontAwesome name='search' className='app__navcol__item__icon' />Home</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/clients' activeClassName='is-active'>Clients</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/assets' activeClassName='is-active'>Assets</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/pools' activeClassName='is-active'>Pools</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/transactions' activeClassName='is-active'>Transactions</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/config' activeClassName='is-active'>Config</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/alerts' activeClassName='is-active'>Alerts</NavLink></li>
      </NavcolMenu>
    </Navcol>
  )
}
