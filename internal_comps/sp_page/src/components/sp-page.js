import { LitElement, html } from '@polymer/lit-element';

import './page-sections/sp-page-footer.js';
import './page-sections/sp-page-header.js';
import './page-sections/sp-page-view.js';
import { SpPageStyles } from './sp-page-styles.js';

class SpPage extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          height: 100vh;
          width: 100vw;
        }
      </style>
      <sp-page-view></sp-page-view>
      <sp-page-header></sp-page-header>
    `;
  }

  static get properties() { 
    return {
      pageId: { type: String }
    }
  }
}

window.customElements.define('sp-page', SpPage);
