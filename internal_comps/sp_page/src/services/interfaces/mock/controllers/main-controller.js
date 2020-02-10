import { initializeModel, Model } from '../models/main-model.js';
import { Log } from 'interface-handler/src/logger';

export const initializePageModel = () => {
  initializeModel();
};

export const getPage = (pageId) => {
  return Model.pages[pageId];
}

export const setPageDetail = (pageId, detailId, detail) => {
  for (let i = 0; i < Model.pages[pageId].details.length; i++) {
    if (detailId === Model.pages[pageId].details[i].id) {
      Model.pages[pageId].details[i] = detail;
      return;
    }
  }
  Log.error(`unable to find the detailId: ${detailId}`);
}
