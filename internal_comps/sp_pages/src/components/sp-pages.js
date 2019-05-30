import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../state/store.js';

import { retrievePages } from '../state/action.js';

class SpPages extends connect(localStore)(LitElement) {
  static get styles() {
    return css`
      :host {
        height: 100vh;
        width: 100vw;
      }
    `;
  }

  render() {
    return html`
      THIS
    `;
  }

  static get properties() { 
    return {
      _pages: { type: Array }
    }
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
