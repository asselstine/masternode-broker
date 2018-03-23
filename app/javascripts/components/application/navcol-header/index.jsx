import React from 'react'

import style from './style'

export default ({title}) => {
  return (
    <div className='navcol__header'>
      <div className='navcol__header__circle'>
        <img src='/images/logo-green-417x361.png' className='navcol__header__img' />
      </div>
      <h3 className='navcol__header__title text-center is-size-5 has-text-weight-light'>{title}</h3>
    </div>
  )
}
