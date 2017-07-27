import webService from './web-service';

import store from '../store/app-store';
import { updateUserContext } from '../actions/user-actions';

class UserService {
  retrieveUserProfile() {
    return webService.sendRequest('/api/user', { method: 'GET' }, { interpretHttpStatus: false, parse: false })
      .then(function(response) {
        if (response.status === 403) {
          return null;
        }
        return response.json();
      })
      .then(function(profile) {
        if (!profile || !profile.isAuthenticated) {
          return;
        }
        store.dispatch(updateUserContext(profile));
      });
  }

  updateProfile(options) {
    return webService.sendRequest('/api/user', { method: 'PUT', body: JSON.stringify(options) })
      .then(() => this.retrieveUserProfile());
  }
}

export default new UserService();
