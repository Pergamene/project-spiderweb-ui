import { initializeModel, Model } from '../models/main-model.js';
import { Log } from 'interface-handler/src/logger';

export const initializePagesModel = () => {
  initializeModel();
};

export const getPages = () => {
  return Model.pages;
}
