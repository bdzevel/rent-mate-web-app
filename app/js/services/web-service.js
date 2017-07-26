import WebError from '../errors/web-error';

class WebService {
  sendRequest(url, req, options = { interpretHttpStatus: true, parse: true }) {
    const payload = Object.assign({
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }, req);
    return fetch(`${process.env.API_SERVER_URL}${url}`, payload)
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
