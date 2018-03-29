import React from 'react'
import { NavLink } from 'react-router-dom'

import SortButton from '@/components/sort-button'

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
    <div className='table-h-scroll'>
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
                  <NavLink to='/assets/p101'>{asset[0]}</NavLink>
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
  )
}
