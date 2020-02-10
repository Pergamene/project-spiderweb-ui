import * as MainInterface from "../services/interfaces/main-interface.js";
import { navigateToPage } from "../../../../src/state/action.js";

export const createPage = (title, summary, templateId) => (dispatch) => {
  MainInterface.createPage(title, summary, templateId).then(pageId => {
    dispatch(navigateToPage(pageId));
  }, err => {
    console.error(err);
  });
};
