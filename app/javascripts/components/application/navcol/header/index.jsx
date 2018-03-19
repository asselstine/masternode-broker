import React from 'react'

import style from './style'

export default ({title}) => {
  return (
    <div className='navcol__header'>
      <div className='navcol__header__circle'>
        <div className='navcol__header__circle__text is-size-7 has-text-grey'>
          white labeled logo
        </div>
      </div>
      <h3 className='navcol__header__title text-center is-size-5 has-text-weight-light'>Broker Portal</h3>
    </div>
  )
}
