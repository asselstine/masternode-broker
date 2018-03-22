import React from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import SortButton from '@/components/sort-button'
import HField from '@/components/bulma/h-field'
import style from './style'

function oneOf(array) {
  return array[parseInt(Math.random() * array.length)]
}

function createAsset(id) {
  return {
    id: id,
    mode: oneOf(['Default', 'Accumulation', 'Cashflow', 'Trading:arbitrage', 'Trading:ai']),
    class: oneOf(['Class A', 'Class B', 'Class C']),
    assignment: oneOf(['Unassigned', 'Assigned']),
    status: oneOf(['Online', 'Offline', 'Pending'])
  }
}

export default () => {

  var assets = [
    ['NA123',
    'MN',
    'Online',
    'NodeAIMN',
    'Accumulation',
    'Allocated'],
    ['NA245',
    'POS',
    'Online',
    '2134 Capital Corp.',
    'Accumulation',
    'Allocated'],
    ['NA246',
    'MN',
    'Online',
    'PolyNode Capital',
    'Accumulation',
    'Allocated'],
    ['NA746',
    'MN',
    'Online',
    'Phoenix Brokers',
    'Accumulation',
    'Allocated'],
    ['NA127',
    'POS',
    'Online',
    'Phoenix Brokers',
    'Cashflow',
    'Allocated'],
    ['NA543',
    'MN',
    'Pending',
    'Phoenix Brokers',
    'Cashflow',
    'Allocated'],
    ['NA236',
    'POS',
    'Offline',
    'Unassigned',
    'Cashflow',
    'Unallocated']
  ]

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <h1>Pools</h1>

        <form className='assets__filters'>
          <div className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <div className="control has-icons-right">
                  <input className="input" type="search" placeholder="ID" />
                  <span className="icon is-small is-right">
                    <FontAwesome name='search' />
                  </span>
                </div>
              </div>
              <div className='level-item'>
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Any status</option>
                      <option>Online</option>
                      <option>Offline</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='level-item'>
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Any Assignment</option>
                      <option>Unassigned</option>
                      <option>Assigned</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='level-item'>
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Any mode</option>
                      <option>Default</option>
                      <option>Accumulation</option>
                      <option>Cashflow</option>
                      <option>Trading:arbitrage</option>
                      <option>Trading:ai</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='level-item'>
                <a className='button is-primary'>Filter</a>
              </div>
            </div>
          </div>
        </form>

        <table className='table nai-table is-fullwidth is-striped'>

          <thead>
            <tr>
              <th>
                <SortButton title='ID' />
              </th>
              <th>
                <SortButton title='Class' />
              </th>
              <th>
                <SortButton title='Status' />
              </th>
              <th>
                <SortButton title='Assignment'/>
              </th>
              <th>
                <SortButton title='Mode' />
              </th>
              <th>
                <SortButton title='Allocated'/>
              </th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => {
              return (
                <tr key={asset[0]}>
                  <td>
                    <NavLink to='/pool-details'>{asset[0]}</NavLink>
                  </td>
                  <td>
                    {asset[1]}
                  </td>
                  <td>
                    {asset[2]}
                  </td>
                  <td>
                    {asset[3]}
                  </td>
                  <td>
                    {asset[4]}
                  </td>
                  <td>
                    {asset[5]}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
