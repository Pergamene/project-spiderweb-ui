import { Http } from 'interface-handler/src/http.js';
import { BaseEndpoint } from 'interface-handler/src/interface-state.js';

export const getPage = (pageId) => {
  // @DEBUG: will need to move this to a global setter later.
  BaseEndpoint.setLocalBaseEndpoint('http://localhost:8782');
  let headers = Http.defaultJsonHeaders();
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
