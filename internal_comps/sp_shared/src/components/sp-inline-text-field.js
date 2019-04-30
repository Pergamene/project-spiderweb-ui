import { LitElement, html } from '@polymer/lit-element';

class SpInlineTextField extends LitElement {
  render() {
    return html`
      <style>
        :host {
          margin: 5px 0;
          display: block;
        }

        .click-propagation-prevention {
          display: inline;
        }

        .label {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
        }

        .field {
          border: 1px solid #222;
          border-radius: 2px;
          padding: 10px;
          background-size: 100%;
        }
      </style>
      <label class="label">${this.label}</label>
      <div class="click-propagation-prevention" @click="${this._handleDisabledPropogation}">
        <div class="field" contenteditable>${this.value}</div>
      </div>
    `;
  };
  
  static get properties() { 
    return {
      value: { type: String },
      label: { type: String },
      disabled: { type: Boolean }
    };
  }

  _handleDisabledPropogation(e) {
    if (!this.disabled) {
      return;
    }
    e.stopPropagation();
  }
}
window.customElements.define('sp-inline-text-field', SpInlineTextField);