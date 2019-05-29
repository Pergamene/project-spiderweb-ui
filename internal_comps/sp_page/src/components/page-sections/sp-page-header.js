import { html, LitElement, css } from 'lit-element';

import { localStore } from '../../state/store.js';
import { showPageMenu } from '../../state/action.js';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { NAV } from '../sp-page-styles.js';
import { MenuIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';

export class SpPageHeader extends LitElement {
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
        height: ${NAV.HEADER.HEIGHT};
      }
    `;
  }

  render() {
    return html`
      <div class="left-items">
        <sp-page-search></sp-page-search>
      </div>
      <div class="right-items">
        <sp-icon-btn .icon="${MenuIcon}" @click="${() => this._openMenu()}" darkBackground></sp-icon-btn>
      </div>
    `;
  }

  _openMenu() {
    localStore.dispatch(showPageMenu());
  }
}

customElements.define('sp-page-header', SpPageHeader);
