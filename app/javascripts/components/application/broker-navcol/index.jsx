import React from 'react'

import Navcol from '../navcol'
import NavcolMenu from '../navcol-menu'
import NavcolHeader from '../navcol-header'

export default ({className}) => {

  var clients = [
    '4321 Canada Inc.',
    '99564 Canada Inc.',
    'Albert Diaz',
    'Crypto Capital',
    'Georgie Ross',
    'Glen Mckinney',
    'Trinity Western Bank',
    'Winifred Lindsey',
    'Zaduk Lemnak'
  ]

  var groups = [
    'Barbadon Inc.',
    'Lifedome Institute',
    'P.C.Y. Holdings Ltd',
    'O.S.H. Holdings Inc.',
    'Z.Y.X. Holdings Ltd.'
  ]

  return (
    <Navcol className={className}>
      <NavcolHeader title='Broker Portal' />
      <NavcolMenu title='Clients' items={clients} activeIndex={0} />
      <NavcolMenu title='Other Groups' items={groups} />
    </Navcol>
  )
}
