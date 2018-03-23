import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import { Modal } from '@/components/modal'
import SelectAsset from '@/components/select-asset'
import PoolAssetsTable from '@/components/pool-assets-table'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  render () {
    return (
      <section className='section'>
        <div className='container is-fluid'>
          <div className='columns is-centered'>
            <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>
              <h1>Confirm Create Pool</h1>

              <div className='box'>
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
                        <span className='assets__table__label'>Mode</span>
                      </td>
                      <td className='assets__table__value'>
                        Accumulation
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
                        <span className='assets__table__label'>Value</span>
                      </td>
                      <td className='assets__table__value'>
                        $23,451,200
                      </td>
                    </tr>
                  </tbody>
                </table>

                <PoolAssetsTable />

                <div className="notification is-warning">
                  <div className='has-text-centered'>You will need to enter your 2FA code to complete the transaction</div>
                </div>

                <div className='has-text-centered'>
                  <a onClick={(e) => this.setState({modalOpen: true})} className='button is-primary'>Confirm</a>
                </div>

                <Modal isOpen={this.state.modalOpen} onClose={(e) => this.setState({modalOpen: false})}>
                  <form className='box'>
                    <h1>Authenticate</h1>
                    <div className='field is-horizontal'>
                      <div className='field-label is-normal is-flex-grow-2'>
                        <label className='label'>Password</label>
                      </div>
                      <div className='field-body'>
                        <div className='field'>
                          <div className='control'>
                            <input type='password' className='input' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='field is-horizontal'>
                      <div className='field-label is-normal is-flex-grow-2'>
                        <label className='label'>2-Factor Code</label>
                      </div>
                      <div className='field-body'>
                        <div className='field'>
                          <div className='control'>
                            <input type='text' className='input' />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='has-text-centered'>
                      <Link to='/pools/pna456/success' className='button is-primary'>Execute</Link>
                    </div>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
