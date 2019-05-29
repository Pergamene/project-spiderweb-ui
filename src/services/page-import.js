import { ROUTES } from '../entities/root.js';

export function importActivePage(activePage) {
  switch (activePage) {
    case ROUTES.PAGES.PAGE:
      import('../../internal_comps/sp_page/src/components/sp-page.js');
      break;
    case ROUTES.PAGES.PAGES:
        import('../../internal_comps/sp_pages/src/components/sp-pages.js');
        break;
    default:
      // don't need to import, sp-root already does that.
      activePage = ROUTES.PAGES.NOT_FOUND;
      break;
  }
  return activePage;
}
