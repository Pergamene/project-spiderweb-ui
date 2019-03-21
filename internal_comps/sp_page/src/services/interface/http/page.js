import { Http, defaultJsonHeaders } from 'interface-handler/src/http.js';
import { baseEndpoints } from 'interface-handler/src/interface-state.js';

export const getPage = (pageId) => {
  baseEndpoints.localBaseEndpoint = 'http://localhost:8782';
  let headers = defaultJsonHeaders;
  headers['X-USER-ID'] = 'test@email.com';
  return new Promise((resolve, reject) => {
    Http.get(`api/page/${pageId}`, headers).then(data => {
      resolve(data.result);
    }, err => {
      console.error(err);
      reject(err);
    });
  });
}
