import React from 'react'
import classnames from 'classnames'

import style from './style'

export default ({title, items, activeIndex, children}) => {
  return (
    <aside className="menu navcol__menu">
      <p className="menu-label">
        {title}
      </p>
      <ul className="menu-list">
        {items.map((item, index) => {
          return (
            <li key={item}>
              <a className={classnames('has-text-weight-bold', { 'is-active': index === activeIndex })}>
                {item}
              </a>
            </li>
          )
        })}
        {children}
      </ul>
    </aside>
  )
}
