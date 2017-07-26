import webService from './web-service';

class PropertyService {
  create(options) {
    return webService.sendRequest('/api/properties', { body: JSON.stringify(options) });
  }
}

export default new PropertyService();
