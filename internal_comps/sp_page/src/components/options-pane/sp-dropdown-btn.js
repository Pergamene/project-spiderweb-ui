import { LitElement, html, css } from 'lit-element';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { SpIconsStyles, DownHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

class SpDropdownBtn extends LitElement {
  static get styles() {
    return [SpIconsStyles, css`
      [svg-icon] {
        fill: ${APP_COLORS.NEAR_WHITE_BORDER};
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
        transition: background-color 0.2s;
      }

      button [svg-icon] {
        transition: all 0.2s;
      }

      button:focus {
        outline: 0;
        background-color: ${APP_COLORS.BASE_WHITE_FOCUS};
      }

      button:hover [svg-icon] {
        fill: ${APP_COLORS.HINT_GRAY};
      }

      button:focus [svg-icon] {
        fill: ${APP_COLORS.HINT_GRAY};
      }
    `];
  }

  render() {
    return html`
      ${this._getRevealedHTML()}
    `;
  };
  
  static get properties() { 
    return {
      selected: { type: Boolean },
      revealed: { type: Boolean }
    };
  };

  _getRevealedHTML() {
    if (!this.revealed) {
      return '';
    }
    return html`
    <button>${this._getBtnIcon()}</button>
    `;
  }

  _getBtnIcon() {
    return DownHoverIcon();
  }
}
customElements.define('sp-dropdown-btn', SpDropdownBtn);