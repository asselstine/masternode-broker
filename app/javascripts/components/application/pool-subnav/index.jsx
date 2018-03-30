import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className='subnav-tabs tabs'>
      <div className='container'>
        <ul>
          <li>
            <NavLink to='/pools' exact={true} activeClassName='is-active'>Manage</NavLink>
          </li>
          <li>
            <NavLink to='/pools/new' activeClassName='is-active'>Create</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
