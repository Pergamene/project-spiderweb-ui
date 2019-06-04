import { html, LitElement, css } from 'lit-element';

import { localStore } from '../../state/store.js';

import { APP_COLORS, COMMON_ELEMENTS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { MenuIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';

export class SpNewPageHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        background-color: ${APP_COLORS.NEAR_BLACK};
        color: ${APP_COLORS.BASE_WHITE};
        height: ${COMMON_ELEMENTS.HEADER.HEIGHT};
      }
    `;
  }

  render() {
    return html`
      <div class="left-items"></div>
      <div class="right-items">
        <sp-icon-btn .icon="${MenuIcon}" @click="${() => this._openMenu()}" darkBackground></sp-icon-btn>
      </div>
    `;
  }

  _openMenu() {
    console.trace('open page menu');
  }
}

customElements.define('sp-new-page-header', SpNewPageHeader);
