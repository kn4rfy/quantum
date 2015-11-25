import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {SIGNUP_USER, LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  signupUser: () => {
    //RouterContainer.get().transitionTo('/login');
    window.location.href = '/login';
    AppDispatcher.dispatch({
      actionType: SIGNUP_USER
    });
  },
  loginUser: (token) => {
    var savedToken = localStorage.getItem('token');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      token: token
    });

    if (savedToken !== token) {
      //var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      //RouterContainer.get().transitionTo(nextPath);
      window.location.href = '/';
      localStorage.setItem('token', token);
    }
  },
  logoutUser: () => {
    //RouterContainer.get().transitionTo('/login');
    window.location.href = '/login';
    localStorage.removeItem('token');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
