import { html, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

export class SpPageProperty extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          font-size: 14px;
        }

        .key {
          font-weight: 700;
          color: var(${APP_COLORS.HINT_GRAY});
          margin-right: 8px;
          text-transform: uppercase;
          font-size: 12px;
          padding: 2px 8px;
          background-color: var(${APP_COLORS.NEAR_WHITE});
          border-radius: 12px;
          letter-spacing: 1px;
        }
      </style>
      <div class="key">${this.property.key} :</div>
      <div class="value">${this.property.value}</div>
    `
  }

  static get properties() { 
    return {
      property: { type: Object }
    }
  }
}

window.customElements.define('sp-page-property', SpPageProperty);
