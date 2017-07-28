import webService from './web-service';

import store from '../store/app-store';
import { updateOwnedProperties } from '../actions/properties-actions';

class PropertyService {
  retrieveOwnedProperties() {
    return webService.sendRequest('/api/properties', { method: 'GET' }, { interpretHttpStatus: false, parse: false })
      .then(function(response) {
        if (response.status === 403) {
          return null;
        }
        return response.json();
      })
      .then(function(properties) {
        if (!properties || !properties.length) {
          return;
        }
        store.dispatch(updateOwnedProperties(properties));
      });
  }

  create(options) {
    return webService.sendRequest('/api/properties', { body: JSON.stringify(options) });
  }
}

export default new PropertyService();
