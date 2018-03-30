import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import SelectAsset from '@/components/select-asset'
import PoolAssetsTableShort from '@/components/pool-assets-table-short'
import Dropdown from '@/components/dropdown'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      assetCount: 0
    }
  }
  render () {
    /*
    onClick={() => {
     // this.setState({assetCount: Math.min(originalAssets.length, this.state.assetCount + 1)})
   }}
   */
    var originalAssets = [
        [
          'NA123',
          'MN',
          'Online',
          'Accumulation',
          '$555,321',
        ],
        [
          'NA248',
          'MN',
          'Online',
          'Accumulation',
          '$15,005',
        ],
        [
          'NA749',
          'MN',
          'Pending',
          'Accumulation',
          '$123,031',
        ],
        [
          'NA545',
          'MN',
          'Online',
          'Accumulation',
          '$1,606,746',
        ]
      ]

    var actualAssets = originalAssets.slice(0, this.state.assetCount)

    if (actualAssets.length) {
      var assets =
        <div>
          <br />
          <PoolAssetsTableShort assets={actualAssets} />
        </div>
    }

    return (
      <section className='section'>
        <div className='container is-not-fluid'>
          <form className='columns is-centered'>
            <div className='column is-two-thirds-desktop is-three-fifths-widescreen is-one-half-fullhd'>

              <h1 className='has-text-centered'>Create Pool</h1>

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
              </div>

              <div className='box'>

                <div className='is-clearfix'>
                  <h1 className='subtitle is-pulled-left'>Assets</h1>
                  <div className='is-pulled-right'>
                    <Dropdown onClick={() => {
                     this.setState({assetCount: Math.min(originalAssets.length, this.state.assetCount + 1)})
                    }} />
                  </div>
                </div>
                {assets}
              </div>

              <p className='has-text-centered'>
                <Link to='/pools/confirm' className="button is-primary">
                  Next
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
