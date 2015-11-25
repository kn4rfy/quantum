/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Sidebar.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Sidebar extends Component {

  constructor() {
    super()
    this.state = {showSidebar: true};
  }

  toggleSidebar() {
    this.setState({showSidebar: !this.state.showSidebar});
  }

  render() {
    return (
      <div className="col-sm-2 col-md-1 sidebar">
        <ul className="nav nav-sidebar">
          <li><a href="#" onClick={this.toggleSidebar.bind(this)}><i className="glyphicon glyphicon-arrow-left"></i></a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="/fleet" onClick={Link.handleClick}>Fleet</a></li>
          <li><a href="/customers" onClick={Link.handleClick}>Customers</a></li>
          <li><a href="/Plans" onClick={Link.handleClick}>Plans</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="/Support" onClick={Link.handleClick}>Support</a></li>
          <li><a href="/Preferences" onClick={Link.handleClick}>Preferences</a></li>
          <li><a href="/Account" onClick={Link.handleClick}>Account</a></li>
        </ul>
      </div>
    );
  }

}

export default Sidebar;
