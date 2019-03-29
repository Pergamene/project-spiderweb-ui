import { html, LitElement } from '@polymer/lit-element';

import { EditHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';
import { Log } from 'interface-handler/src/logger';

export class SpPageActionItems extends LitElement {
  render() {
    return html`${this._getItemsHtml()}`;
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
    for (item of this.items) {
      itemsHtml.push(_getItemHtml(item));
    }
    return itemsHtml;
  }

  _getItemHtml(item) {
    switch (item.type) {
      case 'edit-btn':
        return html`<sp-icon-btn .icon="${EditHoverIcon}" darkBackground></sp-icon-btn>`;
      default:
        Log.error(`Unexpected item type: ${item.type}`);
        return html``;
    }
  }
}

window.customElements.define('sp-page-action-items', SpPageActionItems);
