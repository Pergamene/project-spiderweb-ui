import { getPage } from "../services/interface/page";

const COMPONENT_TAG = 'SP_PAGE';

function _createRequestRaw(base) {
  return `${COMPONENT_TAG}_${base}`;
}

function _action(type, payload = {}) {
  return {type, ...payload};
}

export const SHOW_PAGE_MENU = _createRequestRaw('SHOW_PAGE_MENU');
export const showPageMenu = () => _action(SHOW_PAGE_MENU, {});

export const SET_PAGE = _createRequestRaw('SET_PAGE');
export const setPage = (page) => _action(SET_PAGE, {page});

export const RETRIEVE_PAGE = _createRequestRaw('RETRIEVE_PAGE');
export const retrievePage = (pageId) => (dispatch) => {
  getPage(pageId).then(page => {
    dispatch(setPage(page.page));
  }, err => {
    console.error(err);
  });
};