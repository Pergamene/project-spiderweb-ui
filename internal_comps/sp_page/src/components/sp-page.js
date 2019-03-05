import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../state/store.js';

import './page-sections/sp-page-header.js';
import './page-sections/sp-page-view.js';
import { SpPageStyles } from './sp-page-styles.js';
import { retrievePage } from '../state/action.js';

class SpPage extends connect(localStore)(LitElement) {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          height: 100vh;
          width: 100vw;
        }
      </style>
      
      ${this._getPageViewHtml()}
      <sp-page-header></sp-page-header>
    `;
  }

  static get properties() { 
    return {
      _pageId: { type: String },
      _page: { type: Object }
    }
  }

  _getPageViewHtml() {
    if (this._page) {
      return html`<sp-page-view .page="${this._page}"></sp-page-view>`;
    }
    return html`<sp-loading-page-view></sp-loading-page-view>`;
  }

  stateChanged(state) {
    this._page = state.sp_page.entities.page;
    this._pageId = state.root.route.pageId;
    if (this._pageId && !this._page) {
      localStore.dispatch(retrievePage(this._pageId));
    }
  }
}

window.customElements.define('sp-page', SpPage);
