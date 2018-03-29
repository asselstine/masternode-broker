import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style'

export default ({to, children}) => {
  return (
    <NavLink className='asset-link button is-primary is-outlined is-rounded' to={to}>{children}</NavLink>
  )
}
