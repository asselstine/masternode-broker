import React from 'react'

import FontAwesome from 'react-fontawesome'

import style from './style'

export default () => {
  return (
    <section className='section create-asset-success'>
      <div className='container is-fluid'>
        <h1>Created Asset: NA123</h1>
        <FontAwesome name='check-circle' className='create-asset-success__icon' />
      </div>
    </section>
  )
}
