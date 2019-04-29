import { html, LitElement } from '@polymer/lit-element';

import { EditHoverIcon, SaveHoverIcon, CloseHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';
import { Log } from 'interface-handler/src/logger';
import { localStore } from '../../state/store.js';

export const ITEM_TYPE = {
  EDIT_BTN: 'edit-btn',
  SAVE_BTN: 'save-btn',
  CLOSE_BTN: 'cancel-btn'
};


export class SpPageActionItems extends LitElement {
  render() {
    return html`
    <style>
      :host {
        display: flex;
      }

      sp-icon-btn:first-child {
        margin-left: 0;
      }

      sp-icon-btn {
        margin-left: 10px;
      }
    </style>
    ${this._getItemsHtml()}
    `;
  }

  static get properties() { 
    return {
      items: { type: Array }
    };
  }

  _getItemsHtml() {
    let itemsHtml = [];
    if (!this.items) {
      return '';
    }
    for (let item of this.items) {
      itemsHtml.push(this._getItemHtml(item));
    }
    return itemsHtml;
  }

  _getItemHtml(item) {
    switch (item.type) {
      case ITEM_TYPE.EDIT_BTN:
        return this._getItemIconHtml(item, EditHoverIcon);
      case ITEM_TYPE.SAVE_BTN:
        return this._getItemIconHtml(item, SaveHoverIcon);
      case ITEM_TYPE.CLOSE_BTN:
        return this._getItemIconHtml(item, CloseHoverIcon);
      default:
        Log.error(`Unexpected item type: ${item.type}`);
        return html``;
    }
  }

  _getItemIconHtml(item, icon) {
    return html`<sp-icon-btn .icon="${icon}" @click="${() => this._handleClick(item)}" darkBackground></sp-icon-btn>`;
  }

  _handleClick(item) {
    if (!item.dispatchOnClick) {
      Log.info(`Item ${item} did not have a dispatchOnClick event`);
      return;
    }
    localStore.dispatch(item.dispatchOnClick);
  }
}

window.customElements.define('sp-page-action-items', SpPageActionItems);
