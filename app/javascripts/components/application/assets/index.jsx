import React from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import style from './style'
import AssetsTable from '@/components/assets-table'
import AssetSubnav from '../asset-subnav'

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
  return (
    <div>
      <AssetSubnav />
      <section className='section'>
        <div className='container is-not-fluid'>
          <h1>Assets</h1>
          <form className='assets__filters'>
            <div className='level'>
              <div className='level-left'>
                <div className='level-item'>
                  <div className='field is-flex-1'>
                    <div className="control has-icons-right is-expanded">
                      <input className="input" type="search" placeholder="ID" />
                      <span className="icon is-small is-right">
                        <FontAwesome name='search' />
                      </span>
                    </div>
                  </div>
                </div>
                <div className='level-item'>
                  <div className='select is-fullwidth'>
                    <select>
                      <option>Any status</option>
                      <option>Online</option>
                      <option>Offline</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
                <div className='level-item'>
                  <div className='select is-fullwidth'>
                    <select>
                      <option>Any Assignment</option>
                      <option>Unassigned</option>
                      <option>Assigned</option>
                    </select>
                  </div>
                </div>
                <div className='level-item'>
                  <div className='select is-fullwidth'>
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
                <div className='level-item'>
                  <a className='button is-primary'>Filter</a>
                </div>
              </div>
            </div>
          </form>

          <AssetsTable />
        </div>
      </section>
    </div>
  )
}
