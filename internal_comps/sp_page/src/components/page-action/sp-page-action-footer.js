import { html, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { NAV } from '../sp-page-styles.js';

import './sp-page-action-items.js';
import './sp-page-action-selection.js';

export class SpPageActionFooter extends LitElement {
  render() {
    return html`
    <style>
      :host {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        background-color: var(${APP_COLORS.NEAR_BLACK});
        color: var(${APP_COLORS.BASE_WHITE});
        height: var(${NAV.FOOTER.HEIGHT});
      }
    </style>
    <div class="left-items">
      <sp-page-action-selection></sp-page-action-selection>
    </div>
    <div class="right-items">
      <sp-page-action-items></sp-page-action-items>
    </div>
    `
  }
}

window.customElements.define('sp-page-action-footer', SpPageActionFooter);
