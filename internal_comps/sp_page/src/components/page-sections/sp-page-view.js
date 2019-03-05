import { html, LitElement } from '@polymer/lit-element';
import { NAV } from '../sp-page-styles';

import '../page-parts/sp-page-title.js';
import '../page-parts/sp-page-summary.js';

export class SpPageView extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: flex;
          width: 100vw;
          margin-top: var(${NAV.HEADER.HEIGHT});
          height: calc(100vh - var(${NAV.HEADER.HEIGHT}) - var(${NAV.FOOTER.HEIGHT}));
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
      </style>
      <sp-page-title .page="${this.page}"></sp-page-title>
      <sp-page-summary .page="${this.page}"></sp-page-summary>
      <sp-page-properties .page="${this.page}"></sp-page-properties>
      <sp-page-details .page="${this.page}"></sp-page-details>
      <sp-page-relations .page="${this.page}"></sp-page-relations>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-view', SpPageView);
