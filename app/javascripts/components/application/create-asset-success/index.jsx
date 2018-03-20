import React from 'react'

import FontAwesome from 'react-fontawesome'

import style from './style'

export default () => {
  return (
    <section className='section'>
      <div className='container is-widescreen'>
        <div className='columns is-centered'>
          <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>
            <h1>Created Asset: NA123</h1>
            <FontAwesome name='check-circle' className='create-asset-success__icon' />
          </div>
        </div>
      </div>
    </section>
  )
}
