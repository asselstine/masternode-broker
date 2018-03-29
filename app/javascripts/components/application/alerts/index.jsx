import React from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import style from './style'

export default () => {
  return (
    <section className='section alerts'>
      <div className='container'>
        <h1>Alerts</h1>

        <div className='alerts__item'>
          <FontAwesome name='angle-right' className='alerts__item__icon' />
          <h2 className='alerts__item__header'>
            Asset NA431 Activated
          </h2>
          <p className='alerts__item__timestamp'>
            2018/3/4 9:00AM
          </p>
          <p>
            <NavLink to='/assets/p101'>Asset NA431</NavLink> has successfully activated.
          </p>
        </div>

        <div className='alerts__item'>
          <FontAwesome name='angle-right' className='alerts__item__icon' />
          <h2 className='alerts__item__header'>
            Payment Delayed
          </h2>
          <p className='alerts__item__timestamp'>
            2018/3/4 9:00AM
          </p>
          <p>
            <NavLink to='/assets/p101'>Asset NA1722</NavLink> has not received a payment within the expected time window.
          </p>
        </div>

        <div className='alerts__item'>
          <FontAwesome name='angle-right' className='alerts__item__icon' />
          <h2 className='alerts__item__header'>
            Software Update Required: NA843
          </h2>
          <p className='alerts__item__timestamp'>
            2018/3/4 9:00AM
          </p>
          <p>
            <NavLink to='/assets/p101'>Asset NA843</NavLink> requires a software update.
          </p>
        </div>

        <div className='alerts__item'>
          <FontAwesome name='angle-right' className='alerts__item__icon' />
          <h2 className='alerts__item__header'>
            Value Warning: NA324
          </h2>
          <p className='alerts__item__timestamp'>
            2018/3/4 9:00AM
          </p>
          <p>
            The value of <NavLink to='/assets/p101'>Asset NA324</NavLink> has increase 15% in the last 24hrs.
          </p>
        </div>
      </div>
    </section>
  )
}
