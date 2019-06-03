import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../state/store.js';

import { retrievePages } from '../state/action.js';
import './page-sections/sp-pages-header.js';
import './page-parts/sp-pages-list.js';
import { BTN_TYPES } from '../../../sp_shared/src/entities/sp-btn-types.js';
import '../../../sp_shared/src/components/sp-btn.js';
import { LOCALE_EN } from '../../../sp_locale/src/entities/en.js';
import { COMMON_ELEMENTS } from '../../../sp_shared/src/entities/sp-shared-style-values.js';

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
        padding: ${PAGE_VIEW_PADDING};
        margin-top: ${COMMON_ELEMENTS.HEADER.HEIGHT};
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
        <sp-btn btntype="${BTN_TYPES.GENERIC.PRIMARY}">${LOCALE_EN.SP_BTN.OTHER.CREATE_PAGE}</sp-btn>
        <sp-pages-list .pages="${this._pages}"></sp-pages-list>
      </div>
      <sp-pages-header></sp-pages-header>
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
}

customElements.define('sp-pages', SpPages);
