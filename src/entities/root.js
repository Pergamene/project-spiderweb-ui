export const ROUTES = {
  PAGES: {
    PAGE: 'ROUTE_PAGE_PAGE',
    PAGES: 'ROUTE_PAGE_PAGES',
    NEW_PAGE: 'ROUTE_PAGE_NEW_PAGE',
    NOT_FOUND: 'ROUTE_PAGE_404'
  },
  ENDPOINTS: {
    PAGES: 'pages'
  },
  ACTIONS: {
    NEW: 'new'
  }
};

export const DEFAULT_PATH = ROUTES.ENDPOINTS.PAGES;
export const DEFAULT_PAGE = ROUTES.PAGES.PAGES;

export function getPageFromPath(path) {
  const parts = _getPathParts(path);
  return _getPageFromEndpoint(parts.part, parts.id);
}

export function getPageIdFromPath(path) {
  const parts = _getPathParts(path);
  return parts.id;
}

/*
  if the path is `/pages/PG_123456789012/details/DT_123456789012/somethingelse` it will return:
  {
    part: 'pages',
    id: 'PG_123456789012',
    next: {
      part: 'details',
      id: 'DT_123456789012',
      next: {
        part: 'somethingelse',
        id: null,
        next: null
      }
    }
  }
*/ 
function _getPathParts(path) {
  let pathParts = {
    part: DEFAULT_PATH,
    id: null,
    next: null
  };
  if (!path || path === '/') {
    return pathParts;
  }
  if (!path.includes('/')) {
    pathParts.part = path;
    return pathParts;
  }
  if (path[0] === "/") {
    path = path.substring(1);
  }
  let pathSplit = path.split('/');
  if (pathSplit.length > 0) {
    pathParts.part = pathSplit[0];
  }
  if (pathSplit.length > 1) {
    pathParts.id = pathSplit[1];
  }
  if (pathSplit.length > 2) {
    pathParts.next = _getPathParts(pathSplit.slice(2, pathSplit.length).join('/'));
  }
  return pathParts;
}

function _getPageFromEndpoint(endpoint, id) {
  switch (endpoint) {
    case ROUTES.ENDPOINTS.PAGES:
      if (id === ROUTES.ACTIONS.NEW) {
        return ROUTES.PAGES.NEW_PAGE;
      }
      if (id) {
        return ROUTES.PAGES.PAGE;
      }
      return ROUTES.PAGES.PAGES;
    default:
      return ROUTES.PAGES.NOT_FOUND;
  }
}
