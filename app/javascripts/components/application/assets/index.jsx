import React from 'react'
import { NavLink } from 'react-router-dom'

import HField from '@/components/bulma/h-field'

function oneOf(array) {
  return array[parseInt(Math.random() * array.length)]
}

function createAsset(id) {
  return {
    id: id,
    mode: oneOf(['Mode A', 'Mode B', 'Mode C']),
    class: oneOf(['Class A', 'Class B', 'Class C']),
    assignment: oneOf(['Pending', 'Complete']),
    status: oneOf(['On', 'Off'])
  }
}

export default () => {

  var assets = [
    createAsset('NA123'), createAsset('NA124'), createAsset('NA125')
  ]

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <h1>Assets</h1>

        <form className='columns'>
          <div className='column'>
            <div className='field is-horizontal'>
              <div className='field-label is-normal'>
                <label className='label'>Class</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Any class</option>
                      <option>Class A</option>
                      <option>Class B</option>
                      <option>Class C</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <HField
              label={
                <label className='label'>Status</label>
              }
              body={
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Assigned</option>
                      <option>Pending</option>
                      <option>Complete</option>
                    </select>
                  </div>
                </div>
              } />
          </div>
          <div className='column'>
            <HField
              label={
                <label className='label'>Assignment</label>
              }
              body={
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Assigned</option>
                      <option>Pending</option>
                      <option>Complete</option>
                    </select>
                  </div>
                </div>
              } />
            <HField
              label={
                <label className='label'>Mode</label>
              }
              body={
                <div className='field'>
                  <div className='select'>
                    <select>
                      <option>Assigned</option>
                      <option>Pending</option>
                      <option>Complete</option>
                    </select>
                  </div>
                </div>
              } />

          </div>
        </form>

        <table className='table nai-table is-fullwidth is-striped'>

          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Class
              </th>
              <th>
                Assignment
              </th>
              <th>
                Status
              </th>
              <th>
                Mode
              </th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => {
              return (
                <tr key={asset.id}>
                  <td>
                    <NavLink to='/asset-details'>{asset.id}</NavLink>
                  </td>
                  <td>
                    {asset.class}
                  </td>
                  <td>
                    {asset.assignment}
                  </td>
                  <td>
                    {asset.status}
                  </td>
                  <td>
                    {asset.mode}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
