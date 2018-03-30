import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className='subnav-tabs tabs'>
      <div className='container'>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='is-active'>Total Holdings</NavLink>
          </li>
          <li><a>Market Data</a></li>
          <li><a>Network Data</a></li>
          <li><a>Strategies / Mode</a></li>
          <li><a>Transactions</a></li>
          <li><a>Assignments</a></li>
        </ul>
      </div>
    </div>
  )
}
