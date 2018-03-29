import React, {
  Component
} from 'react'
import FontAwesome from 'react-fontawesome'

import style from './style'

class SortButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      order: ''
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    if (this.state.order === 'asc') {
      this.setState({ order: 'desc' })
    } else {
      this.setState({ order: 'asc' })
    }
  }

  render () {
    switch (this.state.order) {
      case '':
        var name = 'sort'
        break
      case 'asc':
      case 'ASC':
        name = 'sort-down'
        break
      case 'desc':
      case 'DESC':
        name = 'sort-up'
        break
    }
    if (this.props.title) {
      var title = this.props.title + ' '
    }
    return (
      <a onClick={this.onClick} className='sort-button is-block'>
        {title}
        <FontAwesome name={name} className='sort-button__icon' />
      </a>
    )
  }
}

export default SortButton
