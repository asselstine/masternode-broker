import React from 'react'

import style from './style'

export default ({className, children}) => {

  return (
    <div className={['navcol', className].join(' ')}>
      <img src='/images/navcol-flourish.png' className='navcol__img' />
      {children}
    </div>
  )
}
