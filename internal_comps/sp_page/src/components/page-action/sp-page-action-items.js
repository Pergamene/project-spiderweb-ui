import { html, LitElement } from '@polymer/lit-element';

import { EditHoverIcon, SaveHoverIcon, CloseHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';
import { Log } from 'interface-handler/src/logger';

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
    for (let index = 0; index < this.items.length; index++) {
      itemsHtml.push(this._getItemHtml(index, this.items[index]));
    }
    return itemsHtml;
  }

  _getItemHtml(index, item) {
    switch (item.type) {
      case ITEM_TYPE.EDIT_BTN:
        return this._getItemIconHtml(index, item, EditHoverIcon);
      case ITEM_TYPE.SAVE_BTN:
        return this._getItemIconHtml(index, item, SaveHoverIcon);
      case ITEM_TYPE.CLOSE_BTN:
        return this._getItemIconHtml(index, item, CloseHoverIcon);
      default:
        Log.error(`Unexpected item type: ${item.type} for item at index ${index}`);
        return html``;
    }
  }

  _getItemIconHtml(index, item, icon) {
    return html`<sp-icon-btn .icon="${icon}" @click="${(e) => this._handleClick(e, index, item)}" darkBackground></sp-icon-btn>`;
  }

  _handleClick(e, index, item) {
    let event = new CustomEvent('item-clicked', {
      detail: {
        originalEvent: e,
        index,
        item
      }
    });
    this.dispatchEvent(event);
  }
}

window.customElements.define('sp-page-action-items', SpPageActionItems);
