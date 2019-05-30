import { Http } from 'interface-handler/src/http.js';
import { getDefaultHeaders } from '../../../../../sp_shared/src/services/interface-state-defaults';

export const getPages = () => {
  let headers = getDefaultHeaders();
  return new Promise((resolve, reject) => {
    Http.get(`api/pages`, headers).then(data => {
      resolve(data.result);
    }, err => {
      reject(err);
    });
  });
}
