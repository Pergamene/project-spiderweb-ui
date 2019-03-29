import * as ActionType from './action.js';

const INITIAL_STATE = {
  ui: {
    pageSectionSelection: {
      id: null,
      type: null
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

function _setPageSectionSelection(state, sectionId, sectionType) {
  return {
    ...state,
    ui: {
      ...state.ui,
      pageSectionSelection: {
        id: sectionId,
        type: sectionType
      }
    }
  };
}

export const sp_page = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_PAGE:
      return _updatePage(state, action.page);
    case ActionType.SELECT_PAGE_SECTION:
      return _setPageSectionSelection(state, action.id, action.type);
    default:
      return state;
  }
};
