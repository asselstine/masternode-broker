import React, {
  Component
} from 'react'
import classnames from 'classnames'

import LineChart from '@/components/line-chart'
import style from './style'
import FontAwesome from 'react-fontawesome'
import PoolAssetsTable from '@/components/pool-assets-table'

export default class extends Component {
  render () {
    var buttons = [
      'P101',
      'P102',
      'P103',
      'P104',
      'P105',
      'P106'
    ]

    return (
      <section className='section'>
        <div className='container is-fluid'>
          <div className='level'>
            <div className='level-left'>
              <span className='level-item cd-label is-inline-block'>Assets</span>
              {buttons.map((name, index) => {
                return (
                  <button key={name} className={classnames('level-item button is-primary is-rounded is-inline-block', { 'is-inverted': index !== 0 })}>{name}</button>
                )
              })}
            </div>
          </div>

          <div className='columns'>
            <div className='column is-two-fifths'>
              <h1 className='no-margin'>
                Pool Details
                <span className='table-header-subtitle'>P101</span>
              </h1>
              <div className='table-h-scroll'>
                <table className='table nai-table is-striped is-fullwidth'>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className='assets__table__label'>ID</span>
                      </td>
                      <td className='assets__table__value'>
                        P101
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Name</span>
                      </td>
                      <td className='assets__table__value'>
                        NodeAI Masternode One
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Status</span>
                      </td>
                      <td className='assets__table__value'>
                        Active
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Administrator</span>
                      </td>
                      <td className='assets__table__value'>
                        NodeAI
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Mode</span>
                      </td>
                      <td className='assets__table__value'>
                        Accumulation
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Management Fee</span>
                      </td>
                      <td className='assets__table__value'>
                        4.5%
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Transaction Fee</span>
                      </td>
                      <td className='assets__table__value'>
                        0.5%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='column is-three-fifths'>
              <LineChart />
            </div>
          </div>

          <div className='columns'>
            <div className='column is-two-fifths'>
              <h1 className='no-margin'>
                Performance
              </h1>
              <div className='table-h-scroll'>
                <table className='table nai-table is-striped is-fullwidth'>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Pool Value</span>
                      </td>
                      <td className='assets__table__value'>
                        $2,300,103
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Performance (30 day)</span>
                      </td>
                      <td className='assets__table__value'>
                        +13% <small>($300,103)</small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Performance (YTD)</span>
                      </td>
                      <td className='assets__table__value'>
                        +13% <small>($300,103)</small>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Cashflow</span>
                      </td>
                      <td className='assets__table__value'>
                        $0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='column is-three-fifths'>
              <h1 className='no-margin'>
                Assets
              </h1>
              <PoolAssetsTable />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
