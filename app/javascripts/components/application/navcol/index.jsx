import React from 'react'

import style from './style'

export default ({className, children}) => {

  return (
    <div className={['navcol', className].join(' ')}>
      {children}
    </div>
  )
}
