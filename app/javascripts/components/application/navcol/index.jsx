import React from 'react'
import classnames from 'classnames'
import style from './style'

import Menu from './menu'
import Header from './header'

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
    <div className={['navcol', className].join(' ')}>
      <Header title='Broker Portal' />
      <Menu title='Clients' items={clients} />
      <Menu title='Other Groups' items={groups} />
    </div>
  )
}
