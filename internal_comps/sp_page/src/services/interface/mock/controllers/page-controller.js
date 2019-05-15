import { initializeModel, Model } from '../models/model.js';

export const initializePageModel = () => {
  initializeModel();
};

export const getPage = (pageId) => {
  return Model.pages[pageId];
}

export const setPageDetail = (pageId, detailId, detail) => {
  return Model.pages[pageId].details[detailId] = detail;
}
