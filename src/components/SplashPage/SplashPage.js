/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './SplashPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SplashPage extends Component {

  render() {
    const title = 'We Steer Splash Page';
    return (
      <div className="SplashPage">
        <div className="SplashPage-container">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }

}

export default SplashPage;
