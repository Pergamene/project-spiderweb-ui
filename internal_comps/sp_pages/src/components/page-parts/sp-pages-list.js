import { html, LitElement, css } from 'lit-element';

import './sp-pages-list-item.js';
import { SHADOW_ELEVATIONS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { navigateToPage } from '../../../../../src/state/action.js';
import { localStore } from '../../state/store.js';

export class SpPagesList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      sp-pages-list-item:first-child {
        margin-top: 0;
      }

      sp-pages-list-item {
        margin-top: 10px;
        cursor: pointer;
        box-shadow: ${SHADOW_ELEVATIONS.LEVEL_1.BASE};
      }

      sp-pages-list-item:hover {
        box-shadow: ${SHADOW_ELEVATIONS.LEVEL_1.HOVER};
      }

      sp-pages-list-item:active {
        box-shadow: ${SHADOW_ELEVATIONS.LEVEL_1.INSET};
      }
    `;
  }

  render() {
    return html`
      ${this.pages.map((page, index) => this._getPageItemHtml(page, index))}
    `;
  }

  static get properties() { 
    return {
      pages: { type: Array }
    };
  }

  _getPageItemHtml(page, index) {
    return html`<sp-pages-list-item .page="${page}" @click="${() => this._selectPage(page)}"></sp-pages-list-item>`;
  }

  _selectPage(page) {
    localStore.dispatch(navigateToPage(page.id));
  }
}

customElements.define('sp-pages-list', SpPagesList);
