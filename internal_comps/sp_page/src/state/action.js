import { getPage } from "../services/interface/page.js";
import { localStore } from "./store.js";
import { Log } from 'interface-handler/src/logger.js';
import { generateMarkdown } from 'sp-markdown-partitioner/src/partitions-to-markdown.js';
import { generatePartitions } from 'sp-markdown-partitioner/src/markdown-to-partitions.js';

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
export const selectPageDetail = (detailId) => _action(SELECT_PAGE_SECTION, {id: detailId, sectionType: PAGE_SECTION_TYPE_DETAIL});
export const selectPageOverview = () => _action(SELECT_PAGE_SECTION, {sectionType: PAGE_SECTION_TYPE_OVERVIEW});
export const selectPageProperties = () => _action(SELECT_PAGE_SECTION, {sectionType: PAGE_SECTION_TYPE_PROPERTIES});


export const PAGE_SELECTION_ACTION_EDIT = 'edit';

export const editPageSelection = () => (dispatch) => {
  let state = localStore.getState();
  let draftPage = _getDraftPage(state.sp_page.ui.pageSectionSelection, state.sp_page.entities.page);
  dispatch(_editPageSelection(draftPage));
}

function _getDraftPage(pageSectionSelection, page) {
  switch (pageSectionSelection.type) {
    case PAGE_SECTION_TYPE_OVERVIEW:
      return {
        ...page,
        title: page.title,
        summary: page.summary
      };
    case PAGE_SECTION_TYPE_DETAIL:
      let details = [...page.details];
      let markdown = generateMarkdown(details[pageSectionSelection.id].partitions);
      details[pageSectionSelection.id] = { 
        ...page.details[pageSectionSelection.id],
        markdown: markdown
      };
      delete details[pageSectionSelection.id].partitions;
      return {
        ...page,
        details
      };
    default:
      Log.error(`unexpected page selection type: ${sectionType}`);
      return page;
  }
}

export const EDIT_PAGE_SELECTION = _createRequestRaw('EDIT_PAGE_SELECTION');
export const _editPageSelection = (page) => _action(EDIT_PAGE_SELECTION, {page});

export const SET_DRAFT_PAGE = _createRequestRaw('SET_DRAFT_PAGE');
export const _setDraftPage = (page) => _action(SET_DRAFT_PAGE, {page});


export const savePageEdits = (draftPage) => (dispatch) => {
  let state = localStore.getState();
  let page = _getUndraftedPage(state.sp_page.ui.pageSectionSelection, draftPage);
  dispatch(_savePageEdits(page));
}

function _getUndraftedPage(pageSectionSelection, draftPage) {
  switch (pageSectionSelection.type) {
    case PAGE_SECTION_TYPE_OVERVIEW:
      return draftPage;
    case PAGE_SECTION_TYPE_DETAIL:
      let details = [...draftPage.details];
      let partitions = generatePartitions(details[pageSectionSelection.id].markdown);
      details[pageSectionSelection.id] = { 
        ...draftPage.details[pageSectionSelection.id],
        partitions: partitions
      };
      delete details[pageSectionSelection.id].markdown;
      return {
        ...draftPage,
        details
      };
    default:
      Log.error(`unexpected page selection type: ${sectionType}`);
      return draftPage;
  }
}

export const SAVE_PAGE_EDITS = _createRequestRaw('SAVE_PAGE_EDITS');
export const _savePageEdits = (page) => _action(SAVE_PAGE_EDITS, {page});


export const CANCEL_PAGE_SELECTION = _createRequestRaw('CANCEL_PAGE_SELECTION');
export const cancelPageSelection = () => _action(CANCEL_PAGE_SELECTION, {});