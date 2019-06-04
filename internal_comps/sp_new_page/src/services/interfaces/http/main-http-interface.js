import { Http } from 'interface-handler/src/http.js';
import { getDefaultHeaders } from '../../../../../sp_shared/src/services/interface-state-defaults';

export const createPage = (title, summary, templateId) => {
  let headers = getDefaultHeaders();
  return new Promise((resolve, reject) => {
    body = {
      title,
      summary,
      templateId
    };
    Http.post(`api/pages`, headers, null, body).then(data => {
      resolve(data.result.id);
    }, err => {
      reject(err);
    });
  });
}
