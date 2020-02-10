import { LitElement, html, css } from 'lit-element';
import { APP_COLORS } from '../entities/sp-shared-style-values.js';
import { SpIconsStyles } from '../entities/sp-icons.js';

class SpIconBtn extends LitElement {
  static get styles() {
    return [SpIconsStyles, css`
      .click-propagation-prevention {
        display: inline;
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
        transition: background-color 0.2s;
      }

      button.sp-icon-btn:focus {
        outline: 0;
      }
    `];
  }

  render() {
    return html`
      <style>
        button.sp-icon-btn [svg-icon] {
          fill: ${this._getBtnIconFillColor()};
        }

        button.sp-icon-btn:focus {
          background-color: ${this._getBtnFocusBackgroundColor()} !important;
        }

        button.sp-icon-btn:focus [svg-icon] {
          fill: ${this._getBtnIconFocusFillColor()} !important;
        }

        button.sp-icon-btn:hover [svg-icon] {
          fill: ${this._getBtnIconHoverFillColor()} !important;
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
      subtleHover: { type: Boolean },
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

  _getBtnIconFillColor() {
    if (this.darkBackground) {
      if (this.subtleHover) {
        return css`${APP_COLORS.NEAR_BLACK_FOCUS}`;
      }
      return css`${APP_COLORS.BASE_WHITE}`;
    }
    if (this.subtleHover) {
      return css`${APP_COLORS.BASE_WHITE_FOCUS}`;
    }
    return css`${APP_COLORS.NEAR_BLACK}`;
  }

  _getBtnFocusBackgroundColor() {
    if (this.darkBackground) {
      return css`${APP_COLORS.NEAR_BLACK_FOCUS}`;
    }
    return css`${APP_COLORS.BASE_WHITE_FOCUS}`;
  }

  _getBtnIconFocusFillColor() {
    if (!this.subtleHover) {
      return css``;
    }
    if (this.darkBackground) {
      console.trace('@TODO: not finished');
      return css``;
    }
    return css`${APP_COLORS.HINT_GRAY}`;
  }

  _getBtnIconHoverFillColor() {
    if (!this.subtleHover) {
      return css``;
    }
    if (this.darkBackground) {
      console.trace('@TODO: not finished');
      return css``;
    }
    return css`${APP_COLORS.HINT_GRAY}`;
  }
}
customElements.define('sp-icon-btn', SpIconBtn);