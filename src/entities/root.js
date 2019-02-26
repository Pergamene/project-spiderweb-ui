export const ROUTES = {
  PAGES: {
    PAGE: 'ROUTE_PAGE_PAGE',
    NOT_FOUND: 'ROUTE_PAGE_404'
  },
  ENDPOINTS: {
    PAGE: 'page'
  }
};

export const DEFAULT_PATH = ROUTES.ENDPOINTS.PAGE;

export const getPageFromPath = (path) => {
  const endpoint = _getEndpoint(path);
  return _getPageFromEndpoint(endpoint);
}

function _getEndpoint(path) {
  return !path || path === '/' ? DEFAULT_PATH : path.slice(1);
}

function _getPageFromEndpoint(endpoint) {
  switch (endpoint) {
    case ROUTES.ENDPOINTS.PAGE:
      return ROUTES.PAGES.PAGE;
    default:
      return ROUTES.PAGES.NOT_FOUND;
  }
};