import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/UserConstants';
import UserActions from '../actions/UserActions';

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
    })).then(function(response) {
      var jwt = response.id;
      UserActions.loginUser(jwt);
      return true;
    });;
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
    })).then(function() {
      UserActions.registerUser();
      return true;
    });
  }
}

export default new AuthService()
