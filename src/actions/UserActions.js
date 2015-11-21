import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/UserConstants.js';
import Router from '../routes';

export default {
  registerUser: () => {
    window.location.href = '/login';
  },
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });

    if (savedJwt !== jwt) {
      window.location.href = '/';
      localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: () => {
    window.location.href = '/login';
    localStorage.removeItem('jwt');

    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
