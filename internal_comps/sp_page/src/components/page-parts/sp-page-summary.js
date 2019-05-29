import { html, LitElement, css } from 'lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

export class SpPageSummary extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 14px;
        line-height: 24px;
        padding: 5px 10px;
        background-size: 100%;
        border-left: 2px solid ${APP_COLORS.OFF_BLACK};
        background-color: ${APP_COLORS.NEAR_WHITE};
      }
    `;
  }

  render() {
    return html`
      ${this.page.summary}
    `;
  }

  static get properties() { 
    return {
      page: { type: Object }
    };
  }
}

customElements.define('sp-page-summary', SpPageSummary);
