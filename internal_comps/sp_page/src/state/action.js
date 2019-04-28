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

export const retrievePage = (pageId) => (dispatch) => {
  getPage(pageId).then(page => {
    dispatch(setPage(page));
  }, err => {
    console.error(err);
  });
};

export const PAGE_SECTION_TYPE_DETAIL = 'detail';
export const PAGE_SECTION_TYPE_OVERVIEW = 'overview';
export const PAGE_SECTION_TYPE_PROPERTIES = 'properties';
export const SELECT_PAGE_SECTION = _createRequestRaw('SELECT_PAGE_SECTION');

export const selectPageDetail = (detailId) => _action(SELECT_PAGE_SECTION, {id: detailId, type: PAGE_SECTION_TYPE_DETAIL});
export const selectPageOverview = () => _action(SELECT_PAGE_SECTION, {type: PAGE_SECTION_TYPE_OVERVIEW});
export const selectPageProperties = () => _action(SELECT_PAGE_SECTION, {type: PAGE_SECTION_TYPE_PROPERTIES});
