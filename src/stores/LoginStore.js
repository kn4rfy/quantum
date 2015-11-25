import {SIGNUP_USER, LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt from 'jsonwebtoken';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._token = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case SIGNUP_USER:
        this._user = null;
        this.emitChange();
        break;
      case LOGIN_USER:
        this._token = action.token;
        this._user = jwt.decode(this._token);
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  user() {
    return this._user;
  }

  token() {
    return this._token;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();
