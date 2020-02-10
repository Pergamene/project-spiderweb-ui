import { Http } from 'interface-handler/src/http.js';
import { getDefaultHeaders } from '../../../../../sp_shared/src/services/interface-state-defaults';

export const getPages = (nextBatchId) => {
  let headers = getDefaultHeaders();
  return new Promise((resolve, reject) => {
    params = {};
    if (nextBatchId) {
      params['nextBatchId'] = nextBatchId;
    }
    Http.get(`api/pages`, headers, params).then(data => {
      resolve({
        pages: data.result.batch,
        total: data.result.total,
        nextBatchId: data.result.nextBatch.paramValue
      });
    }, err => {
      reject(err);
    });
  });
}
