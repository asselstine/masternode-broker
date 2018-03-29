import React, {
  Component
} from 'react'
import classnames from 'classnames'

import LineChart from '@/components/line-chart'
import style from './style'
import FontAwesome from 'react-fontawesome'

import AssetSubnav from '../asset-subnav'

export default class extends Component {
  render () {
    var buttons = [
      'NA123',
      'NA245',
      'NA246',
      'NA746',
      'NA127',
      'NA543'
    ]

    return (
      <div>
        <AssetSubnav />
        <section className='section'>
          <div className='container is-not-fluid'>
            <div className='level'>
              <div className='level-left'>
                <span className='level-item cd-label is-inline-block'>Assets</span>
                {buttons.map((name, index) => {
                  return (
                    <button key={name} className={classnames('level-item button is-primary is-rounded is-inline-block', { 'is-outlined': index !== 0 })}>{name}</button>
                  )
                })}
              </div>
            </div>

            <div className='columns'>
              <div className='column is-two-fifths'>
                <h1 className='no-margin'>
                  Asset Details
                  <span className='table-header-subtitle'>NA123</span>
                </h1>
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
                        <span className='assets__table__label'>TYPE</span>
                      </td>
                      <td className='assets__table__value'>
                        ZCoin
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>CLASS</span>
                      </td>
                      <td className='assets__table__value'>
                        Masternode
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Status</span>
                      </td>
                      <td className='assets__table__value'>
                        Online
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Balance</span>
                      </td>
                      <td className='assets__table__value'>
                        1150
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Value (USD)</span>
                      </td>
                      <td className='assets__table__value'>
                        $51,175
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>ASSIGNMENT</span>
                      </td>
                      <td className='assets__table__value'>
                        NodeAIGrowthIncome
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
                  </tbody>
                </table>
              </div>

              <div className='column is-three-fifths'>
                <LineChart />
              </div>
            </div>

            <div className='columns'>
              <div className='column is-two-fifths'>
                <h1 className='no-margin'>
                  Performance
                  <span className='table-header-subtitle'>89.9%</span>
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
                          <span className='assets__table__label'>NODE BALANCE</span>
                        </td>
                        <td className='assets__table__value'>
                          1000
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className='assets__table__label'>Node Purchase Value</span>
                        </td>
                        <td className='assets__table__value'>
                          $25,500 <small>($25.50/unit)</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className='assets__table__label'>Current Balance</span>
                        </td>
                        <td className='assets__table__value'>
                          1150
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className='assets__table__label'>Balance Value</span>
                        </td>
                        <td className='assets__table__value'>
                          $47,725 <small>($41.50/unit)</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='column is-three-fifths'>
                <h1 className='no-margin'>
                  Transactions
                </h1>
                <div className='table-h-scroll'>
                  <table className='table nai-table is-striped is-fullwidth'>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>03/06/18 08:01:30</td>
                        <td>15</td>
                        <td>Reward</td>
                        <td>Pending</td>
                      </tr>
                      <tr>
                        <td>09/15/17 10:13:19</td>
                        <td>15</td>
                        <td>Reward</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>04/30/17 09:32:05</td>
                        <td>15</td>
                        <td>Reward</td>
                        <td>Complete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}
