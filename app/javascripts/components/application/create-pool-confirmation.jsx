import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import { Modal } from '@/components/modal'
import SelectAsset from '@/components/select-asset'
import PoolAssetsTableShort from '@/components/pool-assets-table-short'

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
              <h1 className='has-text-centered'>Confirm Create Pool</h1>

              <div className='box'>
                <div className='table-h-scroll'>
                  <table className='table nai-table no-border is-striped is-fullwidth'>
                    <tbody>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>ID</span>
                        </td>
                        <td className='assets__table__value'>
                          P101
                        </td>
                      </tr>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Name</span>
                        </td>
                        <td className='assets__table__value'>
                          NodeAI Masternode One
                        </td>
                      </tr>
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Status</span>
                        </td>
                        <td className='assets__table__value'>
                          Active
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
                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Administrator</span>
                        </td>
                        <td className='assets__table__value'>
                          NodeAI
                        </td>
                      </tr>

                      <tr>
                        <td className='assets__table__td'>
                          <span className='assets__table__label'>Value</span>
                        </td>
                        <td className='assets__table__value'>
                          $23,451,200
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <PoolAssetsTableShort />

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
                    <Link to='/pools/pna456/success' className='button is-primary'>Execute</Link>
                  </div>
                </form>
              </div>

              <div className='has-text-centered'>
                <Link to='/pools/new' className='button'>Back</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
