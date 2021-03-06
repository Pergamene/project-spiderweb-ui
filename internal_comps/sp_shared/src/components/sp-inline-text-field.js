import { LitElement, html, css } from 'lit-element';
import { APP_COLORS } from '../entities/sp-shared-style-values';

class SpInlineTextField extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 5px 0;
        display: block;
      }

      .click-propagation-prevention {
        display: inline;
      }

      .width-filler {
        display: flex;
      }

      .label {
        font-size: 14px;
        margin-bottom: 5px;
        color: ${APP_COLORS.HINT_GRAY};
      }

      .field {
        line-height: 26px;    
        white-space: pre-wrap;      
      }

      .field, input {
        border-radius: 2px;
        padding: 10px;
        flex-grow: 1;
        font-size: 16px;
        border: 1px solid ${APP_COLORS.NEAR_BLACK};
      }

      .field:hover, input:hover {
        background-color: ${APP_COLORS.NEAR_WHITE};
      }

      .field:focus, input:focus {
        outline: none !important; /* remove browser default */
        border-bottom-width: 4px;
        margin-bottom: -3px; /* to compensate for the change in border width */
        border: 1px solid ${APP_COLORS.OFF_BLACK};
        background-color: ${APP_COLORS.NEAR_WHITE_BORDER};
      }
    `;
  }

  render() {
    return html`
      <label class="label">${this.label}</label>
      <div class="width-filler click-propagation-prevention" @click="${this._handleDisabledPropogation}">
        ${this._getInputHtml()}
      </div>
    `;
  };
  
  static get properties() { 
    return {
      valueContainer: { type: Object }, // must have a property named: this.valueKey that will be the input value.
      valueKey: { type: String },
      label: { type: String },
      disabled: { type: Boolean },
      multiline: { type: Boolean }
    };
  }

  _getInputHtml() {
    if (this.multiline) {
      return html`<div class="field" contenteditable @input="${this._syncValue}">${this.valueContainer[this.valueKey]}</div>`;
    }
    return html`<input .value="${this.valueContainer[this.valueKey]}" @input="${this._syncValue}">`;
  }

  _handleDisabledPropogation(e) {
    if (!this.disabled) {
      return;
    }
    e.stopPropagation();
  }

  _syncValue(e) {
    if (this.multiline) {
      this.valueContainer[this.valueKey] = e.currentTarget.innerText;      
    } else {
      this.valueContainer[this.valueKey] = e.currentTarget.value;
    }
  }
}
customElements.define('sp-inline-text-field', SpInlineTextField);