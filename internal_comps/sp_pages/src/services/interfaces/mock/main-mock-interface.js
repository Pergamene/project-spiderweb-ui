import { Mock, CALLBACK_TIME } from 'interface-handler/src/mock.js';

import * as Controller from './controllers/main-controller.js';

export const getPages = (nextBatchId) => {
  return new Promise((resolve) => {
    Mock.debugRequest(getPages);
    Controller.initializePagesModel();
    setTimeout(() => {
      let pages = Controller.getPages();
      let response = {
        pages,
        total: 42,
        nextBatchId: 'PG_12345678901X'
      };
      Mock.debugSuccessfulResponse(getPages, response);
      resolve(Mock.prepareResponse(response));
    }, CALLBACK_TIME.GET);
  });
};
