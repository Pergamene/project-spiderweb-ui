import { LitElement, html, css } from 'lit-element';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { SpIconsStyles, EditHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

class SpEditBtn extends LitElement {
  static get styles() {
    return [SpIconsStyles, css`
      button {
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
      }

      button:focus {
        outline: 0;
      }
    `];
  }

  render() {
    return html`
      <style>
        [svg-icon] {
          fill: ${this._getBtnFillColor()};
        }

        button:focus {
          background-color: ${this._getBtnFocusBackgroundColor()};
        }
      </style>
      <button>${this._getBtnIcon()}</button>
    `;
  }
  
  static get properties() { 
    return {
      selected: { type: Boolean },
      revealed: { type: Boolean }
    };
  }

  _getBtnIcon() {
    return EditHoverIcon();
  }

  _getBtnFillColor() {
    if (this.selected) {
      return html`${APP_COLORS.BASE_WHITE}`;
    }
    return html`${APP_COLORS.NEAR_BLACK}`;
  }

  _getBtnFocusBackgroundColor() {
    if (this.selected) {
      return html`${APP_COLORS.NEAR_BLACK_FOCUS}`;
    }
    return html`${APP_COLORS.BASE_WHITE_FOCUS}`;
  }
}
customElements.define('sp-edit-btn', SpEditBtn);