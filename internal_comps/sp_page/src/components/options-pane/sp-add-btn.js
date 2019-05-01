import { LitElement, html } from '@polymer/lit-element';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { SpIconsStyles, AddHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

class SpAddBtn extends LitElement {
  render() {
    return html`
      ${SpIconsStyles}
      <style>
        [svg-icon] {
          fill: ${this._getBtnFillColor()};
        }

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
          background-color: ${this._getBtnFocusBackgroundColor()};
        }
      </style>
      <button>${this._getBtnIcon()}</button>
    `;
  };
  
  static get properties() { 
    return {
      selected: { type: Boolean },
      revealed: { type: Boolean }
    };
  };

  _getBtnIcon() {
    return AddHoverIcon();
  }

  _getBtnFillColor() {
    if (this.selected) {
      return html`var(${APP_COLORS.BASE_WHITE})`;
    }
    return html`var(${APP_COLORS.NEAR_WHITE_BORDER})`;
  }

  _getBtnFocusBackgroundColor() {
    if (this.selected) {
      return html`var(${APP_COLORS.NEAR_BLACK_FOCUS})`;
    }
    return html`var(${APP_COLORS.BASE_WHITE_FOCUS})`;
  }
}
window.customElements.define('sp-add-btn', SpAddBtn);