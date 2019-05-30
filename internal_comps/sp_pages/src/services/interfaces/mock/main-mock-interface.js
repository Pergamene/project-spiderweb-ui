import { Mock, CALLBACK_TIME } from 'interface-handler/src/mock.js';

import * as Controller from './controllers/main-controller.js';

export const getPages = () => {
  return new Promise((resolve) => {
    Mock.debugRequest(getPages);
    Controller.initializePagesModel();
    setTimeout(() => {
      let response = Controller.getPages();
      Mock.debugSuccessfulResponse(getPages, response);
      resolve(Mock.prepareResponse(response));
    }, CALLBACK_TIME.GET);
  });
};
