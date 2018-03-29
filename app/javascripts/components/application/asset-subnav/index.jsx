import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style'

export default () => {
  return (
    <div className='subnav'>
      <div className='container'>
        <div className='level'>
          <div className='level-left'>
            <NavLink className='subnav__item level-item' to='/assets/new'>Create Asset</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
