import store from '../store/app-store';
import { updateUserContext } from '../actions/user-actions';

class AuthService {
  login() {
    return Promise.resolve({})
      .then(profile => store.dispatch(updateUserContext(profile)));
  }

  register() {
    return Promise.resolve({})
      .then(profile => store.dispatch(updateUserContext(profile)));
  }
}

export default new AuthService();
