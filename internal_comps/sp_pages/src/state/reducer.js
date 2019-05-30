import * as ActionType from './action.js';

const INITIAL_STATE = {
  ui: {},
  entities: {
    pages: []
  }
};

function _setPages(state, pages) {
  return {
    ...state,
    entities: {
      ...state.entities,
      pages
    }
  };
}

export const sp_page = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_PAGE:
      return _setPages(state, action.pages);
    default:
      return state;
  }
};
