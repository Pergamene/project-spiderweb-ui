import { Http } from 'interface-handler/src/http.js';
import { getDefaultHeaders } from '../../../../../sp_shared/src/services/interface-state-defaults';

export const getPage = (pageId) => {
  let headers = getDefaultHeaders();
  return new Promise((resolve, reject) => {
    Http.get(`api/pages/${pageId}`, headers).then(data => {
      resolve(data.result);
    }, err => {
      console.error(err);
      reject(err);
    });
  });
}

export const setDetail = (pageId, detailId, detail) => {
  let headers = getDefaultHeaders();
  return new Promise((resolve, reject) => {
    Http.put(`api/pages/${pageId}/details/${detailId}`, headers, detail).then(data => {
      resolve(data.result);
    }, err => {
      console.error(err);
      reject(err);
    });
  });
}
