import * as ActionType from './action.js';

const INITIAL_STATE = {
  ui: {
    pageSectionSelection: {
      id: null,
      type: null,
      action: null
    },
    draftPage: null
  },
  entities: {
    page: null
  }
};

function _updatePage(state, page) {
  return {
    ...state,
    entities: {
      ...state.entities,
      page
    }
  };
}

function _setPageSectionSelection(state, sectionId, sectionType, sectionAction) {
  return {
    ...state,
    ui: {
      ...state.ui,
      pageSectionSelection: {
        id: sectionId,
        type: sectionType,
        action: sectionAction
      }
    }
  };
}

function _setDraftPage(state, draftPage) {
  return {
    ...state,
    ui: {
      ...state.ui,
      draftPage
    }
  };
}

export const sp_page = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_PAGE:
      return _updatePage(state, action.page);
    case ActionType.SELECT_PAGE_SECTION:
      return _setPageSectionSelection(state, action.id, action.sectionType, null);
    case ActionType.EDIT_PAGE_SELECTION:
      state = _setPageSectionSelection(state, state.ui.pageSectionSelection.id, state.ui.pageSectionSelection.type, ActionType.PAGE_SELECTION_ACTION_EDIT);
      return _setDraftPage(state, action.page);
    case ActionType.SAVE_PAGE_EDITS:
      state = _setPageSectionSelection(state, null, null, null);
      return _updatePage(state, action.page);
    case ActionType.CANCEL_PAGE_SELECTION:
      return _setPageSectionSelection(state, null, null, null);
    default:
      return state;
  }
};
