import { html, LitElement, css } from 'lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

export class SpPageProperty extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .key {
        font-weight: 700;
        margin-right: 8px;
        text-transform: uppercase;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 12px;
        letter-spacing: 1px;
        background-color: ${APP_COLORS.NEAR_WHITE};
        color: ${APP_COLORS.HINT_GRAY};
      }
    `;
  }

  render() {
    return html`
      <div class="key">${this.property.key} :</div>
      <div class="value">${this.property.value}</div>
    `;
  }

  static get properties() { 
    return {
      property: { type: Object }
    };
  }
}

customElements.define('sp-page-property', SpPageProperty);
