import React from 'react'
import { NavLink } from 'react-router-dom'

import Navcol from './navcol'
import NavcolMenu from './navcol-menu'
import NavcolHeader from './navcol-header'

export default (props) => {
  return (
    <Navcol className='app__navcol'>
      <NavcolHeader title='Node Manager' />
      <NavcolMenu title='' items={[]} activeIndex={0}>
        <li><NavLink className='has-text-weight-bold' to='/holdings' activeClassName='is-active'>Holdings</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/pools/new' activeClassName='is-active'>Create Pool</NavLink></li>
        <li><NavLink className='has-text-weight-bold' to='/pools' exact={true} activeClassName='is-active'>Manage Pools</NavLink></li>
      </NavcolMenu>
    </Navcol>
  )
}
