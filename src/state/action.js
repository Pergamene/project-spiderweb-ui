const COMPONENT_TAG = 'ROOT';

function _createRequestRaw(base) {
  return `${COMPONENT_TAG}_${base}`;
}

function _action(type, payload = {}) {
  return {type, ...payload};
}

import { importActivePage } from '../services/page-import.js';
import { getPageFromPath } from '../entities/root.js';

export const UPDATE_ACTIVE_PAGE = _createRequestRaw('UPDATE_ACTIVE_PAGE');
export const updateActivePage = activePage => {
  importActivePage(activePage);
  return _action(UPDATE_ACTIVE_PAGE, {activePage})
};

export const NAVIGATE = _createRequestRaw('NAVIGATE');
export const navigate = (path) => (dispatch) => {
  dispatch(updateActivePage(getPageFromPath(path)));
};
