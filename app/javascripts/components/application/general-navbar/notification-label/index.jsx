import React from 'react'
import classnames from 'classnames'

import style from './style'

export default ({ count, className }) => {
  return (
    <div className={classnames('notification-label', className)}>
      {count}
    </div>
  )
}
