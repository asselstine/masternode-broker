import React from 'react'
import classnames from 'classnames'

import style from './style'

export default ({title, items}) => {
  return (
    <aside className="menu navcol__menu">
      <p className="menu-label">
        {title}
      </p>
      <ul className="menu-list">
        {items.map((item, index) => {
          return (
            <li key={item}>
              <a className={classnames('has-text-weight-bold', { 'is-active': index === 0 })}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
