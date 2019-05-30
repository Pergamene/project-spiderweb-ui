import { Mock, CALLBACK_TIME } from 'interface-handler/src/mock.js';

import * as Controller from './controllers/main-controller.js';

export const getPage = (pageId) => {
  return new Promise((resolve) => {
    Mock.debugRequest(getPage, pageId);
    Controller.initializePageModel(pageId);
    setTimeout(() => {
      let response = Controller.getPage(pageId);
      Mock.debugSuccessfulResponse(getPage, response);
      resolve(Mock.prepareResponse(response));
    }, CALLBACK_TIME.GET);
  });
};

export const setDetail = (pageId, detailId, detail) => {
  return new Promise((resolve) => {
    Mock.debugRequest(setDetail, { pageId, detailId, detail });
    setTimeout(() => {
      Controller.setPageDetail(pageId, detailId, detail);
      Mock.debugSuccessfulResponse(setDetail);
      resolve();
    }, CALLBACK_TIME.PUT);
  });
};
