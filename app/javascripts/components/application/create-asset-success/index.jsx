import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import style from './style'

export default () => {
  return (
    <section className='section'>
      <div className='container is-not-fluid'>
        <div className='columns is-centered'>
          <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>
            <h1>Transaction Executed <FontAwesome name='check-circle' className='create-asset-success__icon' /></h1>
            <div className='box'>
              <h2 className='subtitle'><Link to='/assets/p101'>NA123</Link> was successfully created</h2>
              <h2 className='subtitle'>Transaction ID: s4J342aSD</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
