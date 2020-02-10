import * as ActionType from './action.js';

import { DEFAULT_PAGE } from '../entities/root.js';

const INITIAL_STATE = {
  route: {
    activePage: DEFAULT_PAGE,
    pageId: null
  },
  network: {
    offline: false
  }
};

function _updateActivePage(state, activePage, pageId) {
  return {
    ...state,
    route: {
      ...state.route,
      activePage,
      pageId
    }
  };
}

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.UPDATE_ACTIVE_PAGE:
      return _updateActivePage(state, action.activePage, action.pageId);
    default:
      return state;
  }
};

export default app;
