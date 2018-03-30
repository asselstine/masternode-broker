import React from 'react'

import PoolSubnav from './pool-subnav'

export default ({ children }) => {
  return (
    <div>
      <PoolSubnav />
      {children}
    </div>
  )
}
