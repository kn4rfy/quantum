/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './RegisterPage.scss';
import withStyles from '../../decorators/withStyles';
import Auth from '../../services/AuthService';

@withStyles(styles)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.fullname, this.state.email, this.state.username, this.state.password)
      .catch(function(err) {
        alert("There's an error registering");
        console.log("Error registering", err);
      });
  }

  handleChange(input, event) {
    var inputs = {};
      inputs[input] = event.target.value;
    this.setState(inputs);
  }

  render() {
    const title = 'Registration';
    this.context.onSetTitle(title);
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">Please Register</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Fullname" onChange={this.handleChange.bind(this, 'fullname')} required autofocus/>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" onChange={this.handleChange.bind(this, 'email')} required autofocus/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" onChange={this.handleChange.bind(this, 'username')} required autofocus/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} required/>
                      </div>
                      <button className="btn btn-outline btn-info btn-block" type="submit" onClick={this.signup.bind(this)}>Register</button>
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

export default RegisterPage;
