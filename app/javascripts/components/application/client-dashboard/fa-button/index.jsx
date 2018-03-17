import React, {
  Component
} from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './style'

import FontAwesome from 'react-fontawesome'

class FaButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter () {
    this.setState({ hover: true })
  }

  onMouseLeave () {
    this.setState({ hover: false })
  }

  render () {
    if (this.state.hover) {
      var color = '#fff'
      var bg = this.props.color
    } else {
      color = this.props.color
      bg = 'transparent'
    }

    return (
      <div
        className={classnames('fa-button', this.props.className)}
        style={{
          color: color,
          backgroundColor: bg
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <FontAwesome name={this.props.faName} className='icon' />
      </div>
    )
  }
}

FaButton.propTypes = {
  color: PropTypes.string,
  faName: PropTypes.string
}

FaButton.defaultProps = {
  color: '#76D3DA',
  faName: 'plus'
}

export default FaButton;
