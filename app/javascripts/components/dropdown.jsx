import React, {
  Component
} from 'react'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggle = this.toggle.bind(this)
    this.click = this.click.bind(this)
  }

  toggle (e) {
    console.log('TOGGLE')
    e.preventDefault()
    this.setState({open: !this.state.open})
  }

  click () {
    this.setState({open: false})
    this.props.onClick()
  }

  render () {
    return (
      <div className={classnames("dropdown", { "is-active": this.state.open })}>
        <div className="dropdown-trigger">
          <button
            className="button" aria-haspopup="true" aria-controls="dropdown-menu"
            onClick={this.toggle}>
            <span>Add asset</span>
            <span className="icon is-small">
              <FontAwesome name='angle-down' />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a className="dropdown-item" onClick={this.click}>
              NA123
            </a>
            <a className="dropdown-item" onClick={this.click}>
              NA248
            </a>
            <a className="dropdown-item" onClick={this.click}>
              NA749
            </a>
            <a className="dropdown-item" onClick={this.click}>
              NA545
            </a>
          </div>
        </div>
      </div>
    )
  }
}
