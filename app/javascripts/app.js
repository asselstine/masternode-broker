// Import the page's CSS. Webpack will know what to do with it.
require('./bulma-overrides')
require('./type')
require('./nai-table')
require('./buttons')

import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'

import { Application } from './components/application'

const init = (elem) => {
  ReactDOM.render(<Application />, elem)
}

window.addEventListener('load', function() {
  init(document.getElementById('application'))
});
