import { LitElement, html, css } from 'lit-element';
import { localStore } from '../state/store.js';

import { createPage } from '../state/action.js';
import './page-sections/sp-new-page-header.js';
import { BTN_TYPES } from '../../../sp_shared/src/entities/sp-btn-types.js';
import '../../../sp_shared/src/components/sp-btn.js';
import { LOCALE_EN } from '../../../sp_locale/src/entities/en.js';
import { COMMON_ELEMENTS } from '../../../sp_shared/src/entities/sp-shared-style-values.js';
import { getNewPageObject } from '../entities/new-page.js';
import '../../../sp_page/src/components/page-parts/edit/sp-page-summary-edit.js';
import '../../../sp_page/src/components/page-parts/edit/sp-page-title-edit.js';

class SpNewPage extends LitElement {
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

      sp-new-page-list {
        margin-top: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="page-view">
        <sp-page-title-edit .page="${this._page}"></sp-page-title-edit>
        <sp-page-summary-edit .page="${this._page}"></sp-page-summary-edit>
        <sp-btn btntype="${BTN_TYPES.GENERIC.PRIMARY}" @click="${() => this._createPage()}">${LOCALE_EN.SP_BTN.OTHER.CREATE_PAGE}</sp-btn>
      </div>
      <sp-new-page-header></sp-new-page-header>
    `;
  }

  static get properties() { 
    return {
      _page: { type: Object }
    };
  }

  constructor() {
    super();
    this._page = getNewPageObject();
  }

  _createPage() {
    localStore.dispatch(createPage(this._page.title, this._page.summary, this._page.templateId));
  }
}

customElements.define('sp-new-page', SpNewPage);
