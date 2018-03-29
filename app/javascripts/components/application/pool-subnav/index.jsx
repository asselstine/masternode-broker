import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className='subnav'>
      <div className='container'>
        <div className='level'>
          <div className='level-left'>
            <NavLink className='subnav__item level-item' to='/pools/new'>Create Pool</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
