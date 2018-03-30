import React from 'react'

export default ({assets}) => {

  assets = assets || [
    [
      'NA123',
      'MN',
      'Online',
    ],
    [
      'NA248',
      'MN',
      'Online',
    ],
    [
      'NA749',
      'MN',
      'Pending',
    ],
    [
      'NA545',
      'MN',
      'Online',
    ]
  ]

  return (
    <div className='table-h-scroll'>
      <table className='table nai-table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            return (
              <tr key={asset[0]}>
                <td>{asset[0]}</td>
                <td>{asset[1]}</td>
                <td>{asset[2]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
