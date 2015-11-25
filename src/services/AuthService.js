import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import jwt from 'jsonwebtoken';

class AuthService {

  login(username, password) {
    return when(request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    }).then(function(response) {
      var token = jwt.sign(response, 'secretOrPublicKey');
      LoginActions.loginUser(token);
      return true;
    }));
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(fullname, email, username, password) {
    return when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        fullname, email, username, password
      }
    }).then(function() {
      LoginActions.signupUser();
      return true;
    }));
  }
}

export default new AuthService()
