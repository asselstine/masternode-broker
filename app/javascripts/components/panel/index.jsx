import React from 'react'

import style from './style'

export default ({headingClassName, children}) => {
  return (
    <div className='nai-panel'>
      <div className={['nai-panel__heading', headingClassName].join(' ')} />
      <div className='nai-panel__content'>
        {children}
      </div>
    </div>
  )
}
