import webService from './web-service';
import propertyService from './property-service';

import store from '../store/app-store';
import { updateUserContext, updateOwnedProperties } from '../actions/user-actions';

class AuthenticationService {
  login(options) {
    return webService.sendRequest('/auth/login', { body: JSON.stringify(options) })
      .then(profile => store.dispatch(updateUserContext(profile)))
      .then(() => propertyService.retrieveOwnedProperties());
  }

  logout() {
    return webService.sendRequest('/auth/logout', { }, { parse: false })
      .then(function() {
        store.dispatch(updateUserContext({ isAuthenticated: false }));
        store.dispatch(updateOwnedProperties([]));
      })
      .catch(function() {
        store.dispatch(updateUserContext({ isAuthenticated: false }));
        store.dispatch(updateOwnedProperties([]));
      });
  }

  register(options) {
    return webService.sendRequest('/auth/register', { body: JSON.stringify(options) })
      .then(profile => store.dispatch(updateUserContext(profile)));
  }
}

export default new AuthenticationService();
