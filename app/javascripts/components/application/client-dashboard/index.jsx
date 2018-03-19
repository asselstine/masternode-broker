import React, {
  Component
} from 'react'

import FontAwesome from 'react-fontawesome'
import Panel from '@/components/panel'
import style from './style'
import { Modal } from '@/components/modal'
import LineChart from '@/components/line-chart'

import {
  Doughnut
} from 'react-chartjs-2'
import FaButton from './fa-button'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      assetType: 'NodeAIDash',
      assetUnits: 0,
      assetModalOpen: false
    }
  }

  render () {
    var pieData = {
      labels: ["Dash", "High Cap MN", "Diversified Income", "High Cap POS"],
      datasets: [
        {
          backgroundColor: ['#FF715B', '#39BFC9', '#2F6690', '#CCA43B'],
          data: [35, 29, 22, 16]
        }
      ]
    }

    var pieOptions = {
      legend: {
        position: 'bottom'
      },
      maintainAspectRatio: false,
      responsive: true,
    }

    var holdings = [
      {
        asset: 'NodeAIDiversifiedIncome',
        units: 718,
        value: 917.89,
        weight: 0.05,
        ytdPerformance: 2.4
      },
      {
        asset: 'NodeAIDash',
        units: 103,
        value: 223.21,
        weight: 0.14,
        ytdPerformance: 2.4
      },
      {
        asset: 'NodeAIDash',
        units: 524,
        value: 799.73,
        weight: 0.43,
        ytdPerformance: 2.4
      },
      {
        asset: 'NodeAIDiversifiedIncome',
        units: 718,
        value: 917.89,
        weight: 0.05,
        ytdPerformance: 2.4
      },
      {
        asset: 'NodeAIHighCAPMN',
        units: 718,
        value: 917.89,
        weight: 0.05,
        ytdPerformance: 2.4
      },
    ]

    var transactions = [
      {
        asset: 'NodeAIDash',
        action: 'BUY',
        amount: 500,
        date: '3/6/18 08:01:30',
        status: 'Pending'
      },
      {
        asset: 'NodeAIHighCapMN',
        action: 'BUY',
        amount: '1,050',
        date: '3/6/18 08:01:30',
        status: 'Pending'
      },
      {
        asset: 'NodeAIDash',
        action: 'BUY',
        amount: 10,
        date: '3/6/18 08:01:30',
        status: 'Complete'
      },
      {
        asset: 'NodeAIDash',
        action: 'Sell',
        amount: 500,
        date: '3/6/18 08:01:30',
        status: 'Complete'
      },
    ]


    var selectOptions = [
      'NodeAIDash',
      'NodeAIHighCAPMN',
      'NodeAIDiversifiedIncome'
    ]

    return (
      <section className='section'>
        <div className='container is-fluid'>
          <h1>
            Client Dashboard
          </h1>
          <div className='columns'>
            <div className='column is-one-quarter'>
              <h5 className='cd-label'>Client Info</h5>
              <Panel headingClassName='nai-panel__teal'>
                <p className='has-text-grey'><b>543254 Canada Inc.</b></p>
                <p className='has-text-grey has-text-weight-light'>
                  <span>#50 - 569 Hector Creek</span><br />
                  <span>Vancouver, BC</span><br />
                  <span>V5J 1K3, Canada</span><br />
                </p>
                <p className='text-teal'>
                  <FontAwesome name='phone' className='nai-panel__icon' /> <b>555-555-5555</b>
                </p>
                <p className='text-teal'>
                  <FontAwesome name='envelope' className='nai-panel__icon' /> <b>fake@fakeness.com</b>
                </p>
              </Panel>
            </div>
            <div className='column is-three-quarters'>
              <h5 className='cd-label'>Performance</h5>
              <div className='columns'>
                <div className='column'>
                  <LineChart />
                </div>
                <div className='column'>
                  <Doughnut
                    data={pieData}
                    options={pieOptions}
                    width={170}
                    height={170} />
                </div>
              </div>
            </div>
          </div>
          <h1>
            Existing Holdings
          </h1>
          <table className='nai-table table is-fullwidth is-striped'>
            <thead>
              <tr>
                <th className='actions'></th>
                <th>Asset</th>
                <th>Units</th>
                <th>Value</th>
                <th>% Weight</th>
                <th>YTD PERF.</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => {
                return (
                  <tr key={index}>
                    <td className='actions'>
                      <FaButton />
                      <FaButton faName='pencil' />
                    </td>
                    <td>{holding.asset}</td>
                    <td>{holding.units}</td>
                    <td>${holding.value}</td>
                    <td>{holding.weight}</td>
                    <td>{holding.ytdPerformance}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <div className='columns'>
            <div className='column is-two-thirds'>
              <h1>
                Transactions List
              </h1>
              <table className='nai-table table is-fullwidth is-striped'>
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Buy/Sell</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => {
                    return (
                      <tr key={index}>
                        <td>{transaction.asset}</td>
                        <td>{transaction.action}</td>
                        <td>${transaction.amount}</td>
                        <td>{transaction.date.toString()}</td>
                        <td>{transaction.status}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className='column'>
              <Panel headingClassName='nai-panel__rust'>
                <h1>New Transaction</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    // this.setState({assetModalOpen: true})
                  }}>
                  <h5 className='cd-label'>Select Asset</h5>
                  <div className="field">
                    <div className="select">
                      <select onChange={(e) => this.setState({assetType: e.target.value})} value={this.state.assetType}>
                        {selectOptions.map((option) => <option key={option}>{option}</option>)}
                      </select>
                    </div>
                  </div>
                  <h5 className='cd-label'>Number of Units to Buy</h5>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="number" onChange={(e) => this.setState({assetUnits: e.target.value})} value={this.state.assetUnits} />
                    </div>
                  </div>
                  <input type='submit' className='button is-rounded is-rust nai-panel__content__confirm' value='Begin Transaction' />
                </form>
              </Panel>
              <Modal isOpen={this.state.assetModalOpen} onClose={(e) => this.setState({assetModalOpen: false})}>
                <div className='box'>
                  <h1 className='title'>Create New Asset</h1>
                  <form>



                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
