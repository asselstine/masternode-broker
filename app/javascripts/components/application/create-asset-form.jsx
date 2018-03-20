import React from 'react'
import { Link } from 'react-router-dom'

import SelectAsset from '@/components/select-asset'

export default () => {
  return (
    <section className='section'>
      <div className='container is-fluid'>
        <h1>Create Asset</h1>
        <form className='columns'>
          <div className='column is-four-fifths-desktop is-three-fifths-widescreen'>

            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className="label">ID</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <p className='control'>
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
                <div className='field'>
                  <p className='select'>
                    <SelectAsset />
                  </p>
                  <label className='checkbox is-normal'>
                    <input type='checkbox' /> Masternode
                  </label>
                </div>
              </div>
            </div>

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

            <div className='field is-horizontal'>
              <div className='field-label'>
                <label className='label'>Buy</label>
              </div>
              <div className='field-body'>
                <div className='columns'>
                  <div className='column'>
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
              </div>
            </div>

            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className="label">Exchange</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <p className='select'>
                    <select>
                      <option>Automatic</option>
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
                  <p className='select'>
                    <select>
                      <option>Alacundation</option>
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
                  <p className='select'>
                    <select>
                      <option>Unassigned</option>
                      <option>4321 Company Inc.</option>
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
                  <p className='select'>
                    <select>
                      <option>Accumulation</option>
                      <option>Mode B</option>
                      <option>Mode C</option>
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
                    <Link to='/assets/confirm' className="button is-rust">
                      Create Asset
                    </Link>
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
