import { getPage } from "../services/interface/page.js";
import { localStore } from "./store.js";
import { Log } from 'interface-handler/src/logger.js';
import { generateMarkdown } from 'sp-markdown-partitioner/src/partitions-to-markdown.js';
import { generatePartitions } from 'sp-markdown-partitioner/src/markdown-to-partitions.js';
import { setDetail } from "../services/interface/page.js";

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
export const selectPageDetail = (detailIndex) => _action(SELECT_PAGE_SECTION, {id: detailIndex, sectionType: PAGE_SECTION_TYPE_DETAIL});
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
      return _switchFromPartitionsToMarkdown(pageSectionSelection, page);
    default:
      Log.error(`unexpected page selection type: ${sectionType}`);
      return page;
  }
}

function _switchFromPartitionsToMarkdown(pageSectionSelection, page) {
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
}

export const EDIT_PAGE_SELECTION = _createRequestRaw('EDIT_PAGE_SELECTION');
export const _editPageSelection = (page) => _action(EDIT_PAGE_SELECTION, {page});

export const SET_DRAFT_PAGE = _createRequestRaw('SET_DRAFT_PAGE');
export const _setDraftPage = (page) => _action(SET_DRAFT_PAGE, {page});


export const savePageEdits = (draftPage) => (dispatch) => {
  let state = localStore.getState();
  let page = _getUndraftedPage(state.sp_page.ui.pageSectionSelection, draftPage);
  _savePageEditsToBackend(state.sp_page.ui.pageSectionSelection, page)
  .then(() => {
    dispatch(_savePageEdits(page));
  }, (err) => {
    Log.error('failed to save page edits to backend:');
    Log.error(err);
    // @TODO: report failure to save to user, with snackbar to retry.
  });
}

function _savePageEditsToBackend(pageSectionSelection, page) {
  return setDetail(page.id, pageSectionSelection.id, page.details[pageSectionSelection.id].id);
}

function _getUndraftedPage(pageSectionSelection, draftPage) {
  switch (pageSectionSelection.type) {
    case PAGE_SECTION_TYPE_OVERVIEW:
      return draftPage;
    case PAGE_SECTION_TYPE_DETAIL:
      return _switchFromMarkdownToPartitions(pageSectionSelection, draftPage);
    default:
      Log.error(`unexpected page selection type: ${sectionType}`);
      return draftPage;
  }
}

function _switchFromMarkdownToPartitions(pageSectionSelection, page) {
  let details = [...page.details];
  let partitions = generatePartitions(details[pageSectionSelection.id].markdown);
  details[pageSectionSelection.id] = { 
    ...page.details[pageSectionSelection.id],
    partitions: partitions
  };
  delete details[pageSectionSelection.id].markdown;
  return {
    ...page,
    details
  };
}

export const SAVE_PAGE_EDITS = _createRequestRaw('SAVE_PAGE_EDITS');
export const _savePageEdits = (page) => _action(SAVE_PAGE_EDITS, {page});


export const CANCEL_PAGE_SELECTION = _createRequestRaw('CANCEL_PAGE_SELECTION');
export const cancelPageSelection = () => _action(CANCEL_PAGE_SELECTION, {});