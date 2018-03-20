import React from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

import Navbar from './navbar'
import style from './style'

export default ({navItems, activeIndex, to}) => {

  navItems = navItems || [
    'Details',
    'Analysis',
    'Transactions',
    'Reports',
    'Portal',
    'Files'
  ]

  activeIndex = activeIndex || 0

  to = to || '/assets'

  return (
    <Navbar>
      {navItems.map((item, index) => {
        return (
          <Link to={to} key={item} className={classnames('navbar-item is-uppercase is-size-7 has-text-weight-bold', { 'is-active': index === activeIndex })}>
            {item}
          </Link>
        )
      })}
    </Navbar>
  )
}
