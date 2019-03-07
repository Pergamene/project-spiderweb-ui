import { html, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

export class SpPageSummary extends LitElement {
  render() {
    return html`
      <style>
        :host {
          font-size: 14px;
          line-height: 24px;
          border-left: 2px solid var(${APP_COLORS.OFF_BLACK});
          padding: 5px 10px;
          width: 100%;
          background-color: var(${APP_COLORS.NEAR_WHITE});
        }
      </style>
      ${this.page.summary}
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-summary', SpPageSummary);
