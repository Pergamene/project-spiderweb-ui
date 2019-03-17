import { Mock, CALLBACK_TIME } from 'interface-handler/src/mock.js';

import * as PageController from './controllers/page-controller.js';

export const getPage = (pageId) => {
  return new Promise((resolve) => {
    Mock.debugRequest(getPage, pageId);
    PageController.initializePageModel(pageId);
    setTimeout(() => {
      let response = {
        page: PageController.getPage(pageId)
      };
      Mock.debugSuccessfulResponse(getPage, response);
      resolve(Mock.prepareResponse(response));
    }, CALLBACK_TIME.POST);
  });
};
