import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import '../page-parts/sp-page-title.js';
import '../page-parts/sp-page-summary.js';
import '../page-parts/edit/sp-page-summary-edit.js';
import '../page-parts/edit/sp-page-title-edit.js';

import '../options-pane/sp-dropdown-btn';
import { localStore } from '../../state/store.js';
import { selectPageOverview, PAGE_SELECTION_ACTION_EDIT } from '../../state/action';
import { Log } from 'interface-handler/src/logger';

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
      action: { type: String }
    }
  }

  // @ISSUE: you'll want to do something similar for sp-page-detail.js but instead call selectPageDetail where detailId is the index of the detail item.
  _selectPageOverview() {
    localStore.dispatch(selectPageOverview());
  }

  // @ISSUE: you'll want to do something similiar for <div page-pane> in sp-page-detail.js so that you have an edit view and a read view.
  _getPagePaneHtml() {
    if (!this.action) {
      return html`
        <sp-page-title .page="${this.page}" @click="${() => this._selectPageOverview()}"></sp-page-title>
        <sp-page-summary .page="${this.page}" @click="${() => this._selectPageOverview()}"></sp-page-summary>
      `;
    }
    switch (this.action) {
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
