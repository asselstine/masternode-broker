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
        <div className='container is-not-fluid'>
          <div className='columns is-centered'>
            <div className='column is-two-fifths-desktop is-two-fifths-widescreen'>
              <h1 className='has-text-centered'>Confirm Create Asset</h1>

              <div className='box'>
                <div className='table-h-scroll'>
                  <table className='table nai-table no-border is-striped is-fullwidth'>
                    <tbody>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Name</span>
                        </td>
                        <td className='assets__table__value'>
                          NA123
                        </td>
                      </tr>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Type</span>
                        </td>
                        <td className='assets__table__value'>
                          ETH (POS)
                        </td>
                      </tr>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Units</span>
                        </td>
                        <td className='assets__table__value'>
                          526
                        </td>
                      </tr>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Exchange</span>
                        </td>
                        <td className='assets__table__value'>
                          Gemini
                        </td>
                      </tr>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Order Type</span>
                        </td>
                        <td className='assets__table__value'>
                          Auto
                        </td>
                      </tr>

                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Assignment</span>
                        </td>
                        <td className='assets__table__value'>
                          Unassigned
                        </td>
                      </tr>

                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Mode</span>
                        </td>
                        <td className='assets__table__value'>
                          Accumulation
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              <div className='box is-primary'>
                <h2 className='is-confirm-header'>
                  Authorize Transaction
                </h2>

                <form>
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
                      <label className='label'>2FA Code</label>
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
                    <Link to='/assets/na123/success' className='button is-primary'>Execute</Link>
                  </div>
                </form>
              </div>

              <div className='has-text-centered'>
                <Link to='/assets/new' className='button'>Back</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
