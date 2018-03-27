import React, {
  Component
} from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import classnames from 'classnames'
import createHistory from 'history/createBrowserHistory'

import NotificationLabel from './notification-label'
import style from './style'

export default withRouter(class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentWillReceiveProps (props) {
    if (this.props.location !== props.location) {
      this.onChangeLocation()
    }
  }

  onChangeLocation () {
    this.setState({
      isOpen: false
    })
  }

  render () {
    return (
      <nav className="navbar is-general" role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
          <NavLink className='navbar-item' to='/'>
            <img src='/images/logo-green-417x361.png' className='is-general__logo' />
          </NavLink>
          <a className={classnames('navbar-burger', { 'is-active': this.state.isOpen })} onClick={(e) => this.setState({ isOpen: !this.state.isOpen })}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={classnames("navbar-menu", { 'is-active': this.state.isOpen})}>
          <div className='navbar-start'>
            <NavLink className='navbar-item' to='/' exact={true} activeClassName='is-active'>Home</NavLink>
            <NavLink className='navbar-item' to='/clients' activeClassName='is-active'>Clients</NavLink>
            <NavLink className='navbar-item' to='/assets' activeClassName='is-active'>Assets</NavLink>
            <NavLink className='navbar-item' to='/pools' activeClassName='is-active'>Pools</NavLink>
            <NavLink className='navbar-item' to='/transactions' activeClassName='is-active'>Transactions</NavLink>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className="control has-icons-right">
                <input className="input" type="search" placeholder="Search" />
                <span className="icon is-small is-right">
                  <FontAwesome name='search' />
                </span>
              </div>
            </div>
            <div className='navbar-item has-dropdown'>
              <a className="navbar-link has-text-right">
                <span className='is-uppercase has-text-weight-semibold is-size-7'>User Account</span>
              </a>
            </div>
            <div className='navbar-item'>
              <a>
                <FontAwesome name='bell' />
                <NotificationLabel count={3} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
})
