import React from 'react'

export default ({assets}) => {

  assets = assets || [
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

  return (
    <div className='table-h-scroll'>
      <table className='table nai-table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Class</th>
            <th>Status</th>
            <th>Mode</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => {
            return (
              <tr key={asset[0]}>
                <td>{asset[0]}</td>
                <td>{asset[1]}</td>
                <td>{asset[2]}</td>
                <td>{asset[3]}</td>
                <td>{asset[4]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
