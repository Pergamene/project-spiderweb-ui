import * as ActionType from './action.js';

const INITIAL_STATE = {
  ui: {},
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

export const sp_page = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_PAGE:
      return _updatePage(state, action.page);
    default:
      return state;
  }
};
