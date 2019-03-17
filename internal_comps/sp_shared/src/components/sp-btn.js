import { LitElement, html } from '@polymer/lit-element';
import { Log } from 'interface-handler/src/logger.js';
import { BTN_TYPES } from '../entities/sp-btn-types.js';
import { SpBtnBaseStyles } from '../entities/sp-btn-base-styles.js';

class SpBtn extends LitElement {
  render() {
    return html`
      ${SpBtnBaseStyles}
      <style>
        .click-propagation-prevention {
          display: inline;
        }
      </style>
      <div class="click-propagation-prevention" @click="${this._handleDisabledPropogation}">
        <button class="${this._getBtnClass()} sp-btn" ?disabled="${this.disabled}"><slot></slot></button>
      </div>
    `;
  };
  
  static get properties() { 
    return {
      btntype: { type: String },
      disabled: { type: Boolean }
    };
  };

  _handleDisabledPropogation(e) {
    if (!this.disabled) {
      return;
    }
    e.stopPropagation();
  }

  _getBtnClass() {
    switch (this.btntype) {
      case BTN_TYPES.GENERIC.PRIMARY:
        return 'btn-primary';
      case BTN_TYPES.GENERIC.SECONDARY:
        return 'btn-secondary';
      case BTN_TYPES.GENERIC.WARNING:
        return 'btn-warning';
      case BTN_TYPES.GENERIC.BACK:
        return 'btn-back';
      case BTN_TYPES.PRESET.BACK:
        return 'btn-back';
      case BTN_TYPES.PRESET.CANCEL:
        return 'btn-warning btn-cancel';
      case BTN_TYPES.PRESET.DONE:
        return 'btn-primary btn-done';
      default:
        Log.error(`invalid btntype: ${this.btntype}`);
        return 'btn-secondary';
    }
  }
}
window.customElements.define('sp-btn', SpBtn);