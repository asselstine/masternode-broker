import React from 'react'
import {
  Doughnut
} from 'react-chartjs-2'

import LineChart from '@/components/line-chart'

export default () => {
  var holdingsData = {
    labels: ["Masternodes", "POS Assets", "Bitcoin", "Cash"],
    datasets: [
      {
        backgroundColor: ['#FF715B', '#39BFC9', '#2F6690', '#CCA43B'],
        data: [14432000, 29608100, 476905, 2523095]
      }
    ]
  }

  var holdingsOptions = {
    legend: {
      position: 'bottom'
    },
    tooltipTemplate: "<%= datasetLabel %> - $<%= value.toLocaleString() %>",
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <div className='columns'>
          <div className='column is-two-fifths'>
            <h1 className='no-margin'>
              Total Holdings
              <span className='table-header-subtitle'>$47,040,100</span>
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
                    <span className='assets__table__label'>Masternodes</span>
                  </td>
                  <td className='assets__table__value'>
                    145 <small>($14,432,000)</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='assets__table__label'>POS Assets</span>
                  </td>
                  <td className='assets__table__value'>
                    212 <small>($29,608,100)</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='assets__table__label'>Bitcoin</span>
                  </td>
                  <td className='assets__table__value'>
                    55 <small>($476,905)</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='assets__table__label'>Cash</span>
                  </td>
                  <td className='assets__table__value'>
                    $2,523,095
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='column'>
            <Doughnut
              data={holdingsData}
              options={holdingsOptions}
              width={170}
              height={170} />
          </div>
        </div>


        <div className='columns'>
          <div className='column is-half'>
            <h1 className='no-margin'>
              Asset Allocation
              <span className='table-header-subtitle'>94%</span>
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
                    <span className='assets__table__label'>Masternodes</span>
                  </td>
                  <td className='assets__table__value'>
                    100%
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='assets__table__label'>POS Assets</span>
                  </td>
                  <td className='assets__table__value'>
                    91%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='column'>

            <h1 className='no-margin'>
              Performance
              <span className='table-header-subtitle'>+57% <small>(YTD)</small></span>
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
                    <span className='assets__table__label'>Management Fees</span>
                  </td>
                  <td className='assets__table__value'>
                    $426,100
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='assets__table__label'>Transaction Fees</span>
                  </td>
                  <td className='assets__table__value'>
                    $129,554
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='columns'>
          <div className='column'>
            <LineChart />
          </div>
        </div>
      </div>
    </section>
  )
}
