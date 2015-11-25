/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Navigation.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Auth from '../../services/AuthService';
import LoginStore from '../../stores/LoginStore'

@withStyles(styles)
class Navigation extends Component {

  constructor() {
    super()
    this.state = {userLoggedIn: LoginStore.isLoggedIn()};
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState({userLoggedIn: LoginStore.isLoggedIn()});
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  logout(e) {
    e.preventDefault();
    Auth.logout();
  }

  render() {
    return this.state.userLoggedIn ? (
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/contact" onClick={Link.handleClick}>Contact</a>
          </li>
          <li>
            <a href="javascript:void(0)" onClick={this.logout.bind(this)}><strong className="text-danger">Log Out</strong></a>
          </li>
        </ul>
      </div>
    ) : (
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/contact" onClick={Link.handleClick}>Contact</a>
          </li>
          <li>
            <a href="/login" onClick={Link.handleClick}><strong className="text-success">Log In</strong></a>
          </li>
          <li>
            <a href="/register" onClick={Link.handleClick}><strong className="text-primary">Sign Up</strong></a>
          </li>
        </ul>
      </div>
    );
  }

}

export default Navigation;
