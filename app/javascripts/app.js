// Import the page's CSS. Webpack will know what to do with it.
require('bulma/css/bulma.css');

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'
import {
  Provider
} from 'react-redux'

import { Application } from './components/application'

const init = (elem) => {
  ReactDOM.render(
    <BrowserRouter>
      <Application />
    </BrowserRouter>,
    elem)
}

window.addEventListener('load', function() {
  init(document.getElementById('application'))
});
