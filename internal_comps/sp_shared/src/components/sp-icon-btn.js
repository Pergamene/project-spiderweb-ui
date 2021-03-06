import { LitElement, html, css } from 'lit-element';
import { APP_COLORS } from '../entities/sp-shared-style-values.js';
import { SpIconsStyles } from '../entities/sp-icons.js';

class SpIconBtn extends LitElement {
  static get styles() {
    return [SpIconsStyles, css`
      .click-propagation-prevention {
        display: inline;
      }

      button {
        transition: background-color 0.2s;
      }

      button.sp-icon-btn {
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
        .sp-icon-btn [svg-icon] {
          fill: ${this._getBtnFillColor()};
        }
        button:focus {
          background-color: ${this._getBtnFocusBackgroundColor()};
        }
      </style>
      <div class="click-propagation-prevention" @click="${this._handleDisabledPropogation}">
        <button class="sp-icon-btn" ?disabled="${this.disabled}">${this._getBtnIcon()}</button>
      </div>
    `;
  }
  
  static get properties() { 
    return {
      icon: { type: Function },
      darkBackground: { type: Boolean },
      disabled: { type: Boolean }
    };
  }


  _handleDisabledPropogation(e) {
    if (!this.disabled) {
      return;
    }
    e.stopPropagation();
  }

  _getBtnIcon() {
    return this.icon();
  }

  _getBtnFillColor() {
    if (this.darkBackground) {
      return html`${APP_COLORS.BASE_WHITE}`;
    }
    return html`${APP_COLORS.NEAR_BLACK}`;
  }

  _getBtnFocusBackgroundColor() {
    if (this.darkBackground) {
      return html`${APP_COLORS.NEAR_BLACK_FOCUS}`;
    }
    return html`${APP_COLORS.BASE_WHITE_FOCUS}`;
  }
}
customElements.define('sp-icon-btn', SpIconBtn);