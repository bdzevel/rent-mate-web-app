import store from '../store/app-store';
import { updateUserContext } from '../actions/user-actions';

class AuthService {
  login(options) {
    console.log(process.env.API_SERVER_URL);
    return fetch(`${process.env.API_SERVER_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
      .then(resp => resp.json())
      .then(profile => store.dispatch(updateUserContext(profile)));
  }

  register(options) {
    return fetch(`${process.env.API_SERVER_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
      .then(resp => resp.json())
      .then(profile => store.dispatch(updateUserContext(profile)));
  }
}

export default new AuthService();
