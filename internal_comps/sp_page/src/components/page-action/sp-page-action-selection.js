import { html, LitElement } from '@polymer/lit-element';
import { LOCALE_EN } from '../../../../sp_locale/src/entities/en.js';
import { PAGE_SELECTION_ACTION_EDIT } from '../../state/action.js';
import { Log } from 'interface-handler/src/logger';

export class SpPageActionSelection extends LitElement {
  render() {
    return html`${this._getSelectionHtml()}`;
  }

  static get properties() { 
    return {
      name: { type: String },
      action: { type: String }
    }
  }

  _getSelectionHtml() {
    let selection = this.name;
    if (!selection) {
      selection = LOCALE_EN.SP_PAGE_SELECTION.SELECTIONS.NONE;
    }
    if (!this.action) {
      return LOCALE_EN.SP_PAGE_SELECTION.selected(selection);
    }
    switch (this.action) {
      case PAGE_SELECTION_ACTION_EDIT:
        return LOCALE_EN.SP_PAGE_SELECTION.editing(selection);
      default:
        Log.error(`unexpected action: ${action}`);
        return '';
    }
  }
}

window.customElements.define('sp-page-action-selection', SpPageActionSelection);
