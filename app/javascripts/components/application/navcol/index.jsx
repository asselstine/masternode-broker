import React from 'react'

import style from './style'

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
      <div className='navcol__header'>
        <div className='navcol__header__circle'>
          <div className='navcol__header__circle__text is-size-7 has-text-grey'>
            white labeled logo
          </div>
        </div>
        <h3 className='navcol__header__title text-center is-size-5 has-text-weight-light'>Broker Portal</h3>
      </div>
      <aside className="menu navcol__menu">
        <p className="menu-label">
          Clients
        </p>
        <ul className="menu-list">
          {clients.map((client) => <li key={client}><a className='has-text-weight-bold'>{client}</a></li>)}
        </ul>
      </aside>

      <aside className="menu navcol__menu">
        <p className="menu-label">
          Other Groups
        </p>
        <ul className="menu-list">
          {groups.map((group) => <li key={group}><a className='has-text-weight-bold'>{group}</a></li>)}
        </ul>
      </aside>
    </div>
  )
}
