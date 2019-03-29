import { html, LitElement } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../../state/store.js';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { NAV } from '../sp-page-styles.js';

import './sp-page-action-items.js';
import './sp-page-action-selection.js';

export class SpPageActionFooter extends connect(localStore)(LitElement) {
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
      <sp-page-action-selection .name="${this._selectionName}"></sp-page-action-selection>
    </div>
    <div class="right-items">
      <sp-page-action-items .items="${this._selectionActionItems}"></sp-page-action-items>
    </div>
    `
  }

  static get properties() { 
    return {
      _selectionName: { type: String },
      _selectionActionItems: { type: Array }
    }
  }

  stateChanged(state) {
    let pageSectionSelection = state.sp_page.ui.pageSectionSelection;
    if (!pageSectionSelection.type) {
      this._selectionName = null;
      this._selectionActionItems = null;
    } else {
      this._selectionName = 'THIS IS A TEST';
      this._selectionActionItems = [
        {
          type: 'edit-btn'
        }
      ];
    }
  }
}

window.customElements.define('sp-page-action-footer', SpPageActionFooter);
