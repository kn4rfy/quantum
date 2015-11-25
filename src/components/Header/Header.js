/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import LoginStore from '../../stores/LoginStore';

@withStyles(styles)
class Header extends Component {

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

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/" onClick={Link.handleClick}>Quantum</a>
          </div>
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="/" onClick={Link.handleClick}>Home</a></li>
              <li><a href="/contact" onClick={Link.handleClick}>Contact</a></li>
              <li><a href="/about" onClick={Link.handleClick}>About</a></li>
              <li><a href="/privacy" onClick={Link.handleClick}>Privacy</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/login" onClick={Link.handleClick}><strong className="text-success">Log In</strong></a></li>
              <li><a href="/register" onClick={Link.handleClick}><strong className="text-primary">Sign Up</strong></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Header;
