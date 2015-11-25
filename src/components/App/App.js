/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.scss';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import LoginStore from '../../stores/LoginStore';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

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
    return !this.props.error ? (
      <div className="container">
        <Header />
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
            <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
