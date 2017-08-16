import WebError from '../errors/web-error';

class WebService {
  sendRequest(url, req, options = { baseUrl: null, interpretHttpStatus: true, parse: true }) {
    const baseUrl = options.baseUrl || process.env.API_SERVER_URL;
    const payload = Object.assign({
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }, req);
    return fetch(`${baseUrl}${url}`, payload)
      .then(function(resp) {
        if (options && options.interpretHttpStatus) {
          if (resp.status >= 400) {
            throw new WebError(resp.statusText, resp.status);
          }
        }
        return resp;
      })
      .then(function(resp) {
        if (options && options.parse) {
          return resp.json();
        }
        return resp;
      });
  }
}

export default new WebService();
