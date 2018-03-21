import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import { Modal } from '@/components/modal'
import SelectAsset from '@/components/select-asset'

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
              <h1>Confirm Create Asset</h1>

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
                        <span className='assets__table__label'>Name</span>
                      </td>
                      <td className='assets__table__value'>
                        NA123
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Type</span>
                      </td>
                      <td className='assets__table__value'>
                        ETH
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Units</span>
                      </td>
                      <td className='assets__table__value'>
                        400
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Exchange</span>
                      </td>
                      <td className='assets__table__value'>
                        Gemini
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className='assets__table__label'>Order Type</span>
                      </td>
                      <td className='assets__table__value'>
                        Auto
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span className='assets__table__label'>Assignment</span>
                      </td>
                      <td className='assets__table__value'>
                        Unassigned
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

                <div className="notification is-warning">
                  <div className='has-text-centered'>You will need to enter your 2FA code to complete the transaction</div>
                </div>

                <div className='has-text-centered'>
                  <a onClick={(e) => this.setState({modalOpen: true})} className='button is-primary'>Execute</a>
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
                      <Link to='/assets/na123/success' className='button is-primary'>Create Asset</Link>
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
