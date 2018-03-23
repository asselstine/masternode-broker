import React from 'react'
import { Link } from 'react-router-dom'

import SelectAsset from '@/components/select-asset'

export default () => {

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <form className='columns is-centered'>
          <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>

            <h1>Create Pool</h1>

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
                  <label className="label">Name</label>
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
                  <label className="label">Status</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='select is-fullwidth'>
                      <select>
                        <option>Active</option>
                        <option>Inactive</option>
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
                        <option>Growth</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Admin</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='select is-fullwidth'>
                      <select>
                        <option>NodeAI</option>
                        <option>External</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className="label">Value</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <p className='control is-expanded'>
                      <input className='input' type='number' />
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
                      <Link to='/pools/confirm' className="button is-primary">
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
