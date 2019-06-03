import { getPages } from "../services/interfaces/main-interface.js";
import { Log } from 'interface-handler/src/logger.js';

const COMPONENT_TAG = 'SP_PAGES';

function _createRequestRaw(base) {
  return `${COMPONENT_TAG}_${base}`;
}

function _action(type, payload = {}) {
  return {type, ...payload};
}

export const SHOW_PAGES_MENU = _createRequestRaw('SHOW_PAGES_MENU');
export const showPagesMenu = () => _action(SHOW_PAGES_MENU, {});

export const SET_PAGES = _createRequestRaw('SET_PAGES');
export const setPages = (pages) => _action(SET_PAGES, {pages});

export const retrievePages = () => (dispatch) => {
  getPages().then(({pages}) => {
    dispatch(setPages(pages));
  }, err => {
    Log.error(err);
  });
};
