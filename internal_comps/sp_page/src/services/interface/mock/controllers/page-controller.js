import { initializeModel, Model } from '../models/model.js';

export const initializePageModel = () => {
  initializeModel();
};

export const getPage = (pageId) => {
  return Model.pages[pageId];
}

