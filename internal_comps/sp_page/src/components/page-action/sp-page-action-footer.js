import { html, LitElement, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../../state/store.js';

import { LOCALE_EN } from '../../../../sp_locale/src/entities/en.js';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { NAV } from '../sp-page-styles.js';

import './sp-page-action-items.js';
import './sp-page-action-selection.js';
import { Log } from 'interface-handler/src/logger';
import { editPageSelection, PAGE_SELECTION_ACTION_EDIT, savePageEdits, cancelPageSelection } from '../../state/action.js';
import { ITEM_TYPE } from './sp-page-action-items.js';

export class SpPageActionFooter extends connect(localStore)(LitElement) {
  static get styles() {
    return css`
      :host {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        background-color: ${APP_COLORS.NEAR_BLACK};
        color: ${APP_COLORS.BASE_WHITE};
        height: ${NAV.FOOTER.HEIGHT};
      }
    `;
  }

  render() {
    return this._getHtml();
  }

  static get properties() { 
    return {
      _selectionName: { type: String },
      _selectionActionItems: { type: Array },
      _selectionAction: { type: String }
    };
  }

  stateChanged(state) {
    let pageSectionSelection = state.sp_page.ui.pageSectionSelection;
    if (!pageSectionSelection.type) {
      this._selectionName = null;
    } else {
      this._selectionName = this._getSectionName(pageSectionSelection.type);
    } 
    this._selectionActionItems = this._getSelectionActionItems(pageSectionSelection.action);
    this._selectionAction = pageSectionSelection.action;
  }

  _getSelectionActionItems(action) {
    if (!action) {
      return [{
        type: ITEM_TYPE.EDIT_BTN,
        dispatchToStore: editPageSelection(),
      }];
    }
    switch(action) {
      case PAGE_SELECTION_ACTION_EDIT:
        return [
          {
            type: ITEM_TYPE.SAVE_BTN,
            dispatchEvent: 'save-btn-clicked',
          },
          {
            type: ITEM_TYPE.CLOSE_BTN,
            dispatchToStore: cancelPageSelection(),
          }
        ];
      default:
        Log.error(`Unexpected page action: ${action}`);
        return [];
    }
  }

  _getHtml() {
    if (!this._selectionName) {
      return html``;
    }
    return html`
      <div class="left-items">
        <sp-page-action-selection .name="${this._selectionName}" .action="${this._selectionAction}"></sp-page-action-selection>
      </div>
      <div class="right-items">
        <sp-page-action-items .items="${this._selectionActionItems}" @item-clicked="${this._handleItemClick}"></sp-page-action-items>
      </div>
    `;
  }

  _getSectionName(selectionType) {
    switch(selectionType) {
      case 'overview':
        return LOCALE_EN.SP_PAGE_SELECTION.SELECTIONS.OVERVIEW;
      case 'properties':
        return LOCALE_EN.SP_PAGE_SELECTION.SELECTIONS.PROPERTIES;
      case 'detail':
        return LOCALE_EN.SP_PAGE_SELECTION.SELECTIONS.DETAIL;
      default:
        Log.error(`Undefined selection type: ${selectionType}`);
        return 'UNDEFINED';
    }
  }

  _handleItemClick(e) {
    let item = this._selectionActionItems[e.detail.index];
    if (item.dispatchToStore){
      localStore.dispatch(item.dispatchToStore);
    }
    if (item.dispatchEvent) {
      let event = new CustomEvent(item.dispatchEvent, {
        detail: {
          originalEvent: e
        }
      });
      this.dispatchEvent(event);
    }
  }
}

customElements.define('sp-page-action-footer', SpPageActionFooter);
