import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import style from './style'

export default () => {
  return (
    <section className='section'>
      <div className='container is-fluid'>
        <div className='columns is-centered'>
          <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>
            <h1>Success <FontAwesome name='check-circle' className='create-asset-success__icon' /></h1>
            <div className='box'>
              <h2 className='subtitle'>NA123 was successfully created</h2>
              <Link to='/asset-details'>Go to NA123</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
