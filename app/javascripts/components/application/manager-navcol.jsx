import React from 'react'

import Navcol from './navcol'
import NavcolMenu from './navcol-menu'
import NavcolHeader from './navcol-header'

export default ({className, items}) => {

  var items = items || [
    'Asset Dashboard',
    'Market Data',
    'Network Data',
    'Strategies / Mode',
    'Transactions',
    'Assignments'
  ]

  return (
    <Navcol className={className}>
      <NavcolHeader title='Node Manager' />
      <NavcolMenu title='' items={items} activeIndex={0} />
    </Navcol>
  )
}
