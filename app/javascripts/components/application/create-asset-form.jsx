import React from 'react'
import { Link } from 'react-router-dom'

import SelectAsset from '@/components/select-asset'

export default () => {

  var availability =
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
      </div>
      <div className='field-body'>
        <p className='help'>
          <small>Available: 474</small> <br />
          <small>Required: 1000</small>
        </p>
      </div>
    </div>

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <form className='columns is-centered'>
          <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>

            <h1>Create Asset</h1>

            <div className='box'>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">ID</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded'>
                      <input className='input' />
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Type</label>
                </div>
                <div className='field-body'>
                  <div className='field has-addons'>
                    <div className='control is-expanded'>
                      <p className='select is-fullwidth'>
                        <select>
                          <option>DASH</option>
                          <option>XZC</option>
                          <option>ENG</option>
                          <option>ETH</option>
                        </select>
                      </p>
                    </div>
                    <div className='control'>
                      <label className='checkbox is-normal'>
                        <input type='checkbox' /> Masternode
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {availability}

              <div className='field is-horizontal'>
                <div className='field-label'>
                  <label className='label'>Buy</label>
                </div>
                <div className='field-body'>
                  <div className='field has-addons'>
                    <div className='control is-expanded'>
                      <input type='number' className='input' />
                    </div>
                    <p className='control'>
                      <span className='button is-static'>
                        Units
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Exchange</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='select is-fullwidth'>
                      <select>
                        <option>Auto</option>
                        <option>Bitfinex</option>
                        <option>Gemini</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Order</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='select is-fullwidth'>
                      <select>
                        <option>Auto</option>
                        <option>Iceberg</option>
                        <option>Market</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Assignment</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='select is-fullwidth'>
                      <select>
                        <option>Unassigned</option>
                        <option>Assigned</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Mode</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='select is-fullwidth'>
                      <select>
                        <option>Accumulation</option>
                        <option>Cashflow</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <Link to='/assets/confirm' className="button is-primary">
                        Next
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
