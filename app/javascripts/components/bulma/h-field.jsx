import React from 'react'

export default ({label, body}) => {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        {label}
      </div>
      <div className='field-body'>
        {body}
      </div>
    </div>
  )
}
