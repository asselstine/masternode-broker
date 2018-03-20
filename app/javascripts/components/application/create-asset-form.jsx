import React from 'react'

import SelectAsset from '@/components/select-asset'

export default () => {
  return (
    <section className='section'>
      <div className='container is-fluid'>
        <form>
          <h1>Create Asset</h1>
          <div className='field is-horizontal'>
            <div className='field-label is-normal'>
              <label className="label">Asset Name</label>
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
              <label className="label">Select CryptoAsset</label>
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
              <label className="label">CryptoAsset</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <p className='select'>
                  <SelectAsset />
                </p>
                <label className='checkbox'>
                  <input type='checkbox' /> Masternode
                </label>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-label'>
            </div>
            <div className='field-body'>
              <p className='help'>
                <small>Available: 474</small> <br />
                <small>Required: 1000</small>
              </p>
            </div>
          </div>

          <hr />

          <h1>Create Transaction</h1>

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

          <div className="field is-horizontal">
            <div className="field-label">
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-rust">
                    Create Asset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
