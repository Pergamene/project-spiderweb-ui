import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles.js';

import '../page-parts/sp-page-title.js';
import '../page-parts/sp-page-summary.js';
import '../page-parts/edit/sp-page-summary-edit.js';
import '../page-parts/edit/sp-page-title-edit.js';

import '../options-pane/sp-dropdown-btn.js';
import { localStore } from '../../state/store.js';
import { selectPageOverview, PAGE_SELECTION_ACTION_EDIT, PAGE_SECTION_TYPE_DETAIL, PAGE_SECTION_TYPE_OVERVIEW } from '../../state/action.js';
import { Log } from 'interface-handler/src/logger.js';

export class SpPageOverview extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          display: flex;
        }
      </style>
      <div options-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>        
      </div>
      <div page-pane>
        ${this._getPagePaneHtml()}
      </div>
    `
  }

  static get properties() { 
    return {
      page: { type: Object },
      pageSectionSelection: { type: Object }
    }
  }

  _selectPageOverview() {
    localStore.dispatch(selectPageOverview());
  }

  _getPagePaneHtml() {
    if (!this.pageSectionSelection.action) {
      return html`
        <sp-page-title .page="${this.page}" @click="${() => this._selectPageOverview()}"></sp-page-title>
        <sp-page-summary .page="${this.page}" @click="${() => this._selectPageOverview()}"></sp-page-summary>
      `;
    }
    switch (this.pageSectionSelection.action && this.pageSectionSelection.type === PAGE_SECTION_TYPE_OVERVIEW) {
      case PAGE_SELECTION_ACTION_EDIT:
        return html`
          <sp-page-title-edit .page="${this.page}"></sp-page-title-edit>
          <sp-page-summary-edit .page="${this.page}"></sp-page-summary-edit>
        `;
      default:
        Log.error(`unexpected action: ${this.action}`);
        return html``;
    }
  }
}

window.customElements.define('sp-page-overview', SpPageOverview);
