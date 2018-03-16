import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Navcol from './navcol'

export const Application = () => {
  return (
    <section>
      <Navcol />
    </section>
  )
}
