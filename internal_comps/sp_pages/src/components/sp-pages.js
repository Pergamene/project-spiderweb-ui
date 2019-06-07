import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../state/store.js';

import { retrievePages } from '../state/action.js';
import './page-parts/sp-pages-list.js';
import { BTN_TYPES } from '../../../sp_shared/src/entities/sp-btn-types.js';
import '../../../sp_shared/src/components/sp-btn.js';
import { LOCALE_EN } from '../../../sp_locale/src/entities/en.js';
import { COMMON_ELEMENTS } from '../../../sp_shared/src/entities/sp-shared-style-values.js';
import { navigateToNewPage } from '../../../../src/state/action.js';
import '../../../sp_shared/src/components/sp-header.js';
import { getPageDrawerItems } from '../../../sp_page_shared/src/entities/page-drawer-items.js';

class SpPages extends connect(localStore)(LitElement) {
  static get styles() {
    const PAGE_VIEW_PADDING = css`20px`;
    return css`
      :host {
        height: 100vh;
        width: 100vw;
      }

      .page-view {
        width: calc(100vw - 2*${PAGE_VIEW_PADDING});
        margin-top: ${COMMON_ELEMENTS.HEADER.HEIGHT};
        padding: ${PAGE_VIEW_PADDING};
        height: calc(100vh - ${COMMON_ELEMENTS.HEADER.HEIGHT} - ${COMMON_ELEMENTS.FOOTER.HEIGHT});
      }

      sp-pages-list {
        margin-top: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="page-view">
        <sp-btn btntype="${BTN_TYPES.GENERIC.PRIMARY}" @click="${() => this._createNewPage()}">${LOCALE_EN.SP_BTN.OTHER.CREATE_PAGE}</sp-btn>
        <sp-pages-list .pages="${this._pages}"></sp-pages-list>
      </div>
      <sp-header .drawerItems="${getPageDrawerItems()}"></sp-header>
    `;
  }

  static get properties() { 
    return {
      _pages: { type: Array }
    };
  }

  constructor() {
    super();
    localStore.dispatch(retrievePages());
  }

  stateChanged(state) {
    this._pages = state.sp_pages.entities.pages;
  }

  _createNewPage() {
    localStore.dispatch(navigateToNewPage());
  }
}

customElements.define('sp-pages', SpPages);
