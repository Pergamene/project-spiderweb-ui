import { Mock, CALLBACK_TIME } from 'interface-handler/src/mock.js';

import * as Controller from './controllers/main-controller.js';

export const createPage = (title, summary, templateId) => {
  return new Promise((resolve) => {
    Mock.debugRequest(createPage, {title, summary, templateId});
    setTimeout(() => {
      let response = Controller.createPage(title, summary, templateId);
      Mock.debugSuccessfulResponse(createPage, response);
      resolve(Mock.prepareResponse(response));
    }, CALLBACK_TIME.POST);
  });
};
