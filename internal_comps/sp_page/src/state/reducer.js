import * as ActionType from './action.js';

const INITIAL_STATE = {
  ui: {
    pageSectionSelection: {
      id: null,
      type: null,
      action: null
    }
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

export const sp_page = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_PAGE:
      return _updatePage(state, action.page);
    case ActionType.SELECT_PAGE_SECTION:
      return _setPageSectionSelection(state, action.id, action.sectionType, null);
    case ActionType.EDIT_PAGE_SELECTION:
      return _setPageSectionSelection(state, state.ui.pageSectionSelection.id, state.ui.pageSectionSelection.type, action.action);
    case ActionType.SAVE_PAGE_EDITS:
      // @TODO:
      return _setPageSectionSelection(state, null, null, null);
    case ActionType.CANCEL_PAGE_SELECTION:
      return _setPageSectionSelection(state, null, null, null);
    default:
      return state;
  }
};
