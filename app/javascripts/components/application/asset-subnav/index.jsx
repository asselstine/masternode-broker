import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style'

export default () => {
  return (
    <div className='subnav-tabs tabs'>
      <div className='container'>
        <ul>
          <li>
            <NavLink to='/assets' exact={true} activeClassName='is-active'>Manage</NavLink>
          </li>
          <li>
            <NavLink to='/assets/new' activeClassName='is-active'>Create</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
