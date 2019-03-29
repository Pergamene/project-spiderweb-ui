import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import '../page-parts/sp-page-title.js';
import '../page-parts/sp-page-summary.js';

export class SpPageOverview extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          display: flex;
        }
      </style>
      <div edit-pane></div>
      <div page-pane>
        <sp-page-title .page="${this.page}"></sp-page-title>
        <sp-page-summary .page="${this.page}"></sp-page-summary>
      </div>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-overview', SpPageOverview);
