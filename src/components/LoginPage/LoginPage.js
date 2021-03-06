/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';
import Auth from '../../services/AuthService';

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  login(e) {
    e.preventDefault();
    Auth.login(this.state.username, this.state.password)
      .catch(function (err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  handleChange(input, event) {
    var inputs = {};
      inputs[input] = event.target.value;
    this.setState(inputs);
  }

  render() {
    const title = 'Log In';
    this.context.onSetTitle(title);
    return (
      <div className="LoginPage">
        <div className="LoginPage-container container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">Please Login</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" onChange={this.handleChange.bind(this, 'username')} required autofocus/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} required/>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"/>
                          Remember Me
                        </label>
                      </div>
                      <button className="btn btn-outline btn-success btn-block" type="submit" onClick={this.login.bind(this)}>Login</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
