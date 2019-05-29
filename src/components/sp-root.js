import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { Log } from 'interface-handler/src/logger.js';

import { localStore } from '../state/store.js';
import { navigate } from '../state/action.js';

import { ROUTES } from '../entities/root.js';
import { LOCALE_EN } from '../../internal_comps/sp_locale/src/entities/en.js';

import './sp-404.js';
import { setDefaults } from '../../internal_comps/sp_shared/src/services/interface-state-defaults.js';

class SpRoot extends connect(localStore)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      ${this._activePageHtml()}
    `;
  }

  static get properties() {
    return {
      _page: { type: String }
    }
  }

  constructor() {
    super();
    setDefaults();
  }

  _activePageHtml() {
    switch (this._page) {
      case ROUTES.PAGES.PAGE:
        return html`<sp-page></sp-page>`;
    default:
        return html`<sp-404></sp-404>`;
    }
  }

  firstUpdated() {
    installRouter((location) => localStore.dispatch(navigate(decodeURIComponent(location.pathname))));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {      
      updateMetadata({
        title: this._getPageTitle(this._page)
      });
    }
  }

  _getPageTitle(page) {
    const title = LOCALE_EN.SP_ROOT.TITLE.APP_NAME;
    switch (page) {
      case ROUTES.PAGES.PAGE:
        return `${title} | ${LOCALE_EN.SP_ROOT.TITLE.PAGE}`;
      case ROUTES.PAGES.NOT_FOUND:
        return `${title} | ${LOCALE_EN.SP_ROOT.TITLE.NOT_FOUND}`;
      default:
        Log.error(`Unexpected page: ${page}`);
        return title;
    }
  }

  stateChanged(state) {
    this._page = state.root.route.activePage;
  }
}

customElements.define('sp-root', SpRoot);
