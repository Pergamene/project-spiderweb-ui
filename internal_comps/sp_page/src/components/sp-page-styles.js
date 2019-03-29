import { html } from '@polymer/lit-element';

export const NAV = {
  HEADER: {
    HEIGHT: '--sp_page-nav-header-height'
  },
  FOOTER: {
    HEIGHT: '--sp_page-nav-footer-height'
  }
};

export const CONTENT_PANE = {
  WIDTH: '--sp_page-content-pane-width'
};

export const EDIT_PANE = {
  WIDTH: '--sp_page-edit-pane-width'
};

export const PAGE_PANE = {
  WIDTH: '--sp_page-page-pane-width'
};

export const SpPageStyles = html`
<style>
  :host {
    --sp_page-nav-header-height: 46px;
    --sp_page-nav-footer-height: 46px;
    --sp_page-content-pane-width: 200px;
    --sp_page-edit-pane-width: 60px;
    --sp_page-page-pane-width: 600px;
  }

  [edit-pane] {
    display: flex;
    width: var(${EDIT_PANE.WIDTH});
    align-self: center;
    justify-content: center;
  }

  [page-pane] {
    width: 100%;
    max-width: var(${PAGE_PANE.WIDTH});
    display: flex;
    flex-direction: column;
  }

  [page-pane-section] {
    display: flex;
  }
</style>
`;
