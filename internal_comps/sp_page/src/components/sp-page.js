import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../state/store.js';

import './page-sections/sp-page-header.js';
import './page-sections/sp-page-view.js';
import './page-action/sp-page-action-footer.js';
import { SpPageStyles } from './sp-page-styles.js';
import { retrievePage, PAGE_SELECTION_ACTION_EDIT, savePageEdits } from '../state/action.js';
import { Log } from 'interface-handler/src/logger';

class SpPage extends connect(localStore)(LitElement) {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          height: 100vh;
          width: 100vw;
        }
      </style>
      
      ${this._getPageViewHtml()}
      <sp-page-header></sp-page-header>
      <sp-page-action-footer @save-btn-clicked="${() => this._saveEditedPage()}"></sp-page-action-footer>
    `;
  }

  static get properties() { 
    return {
      _pageId: { type: String },
      _page: { type: Object },
      _pageAction: { type: String }
    }
  }

  _getPageViewHtml() {
    if (this._page) {
      return html`<sp-page-view .page="${this._page}" .action="${this._pageAction}"></sp-page-view>`;
    }
    return html`<sp-loading-page-view></sp-loading-page-view>`;
  }

  stateChanged(state) {
    // @NOTE: if we are editing, we don't want to overwrite the edited page.
    if (this._activelyWorkingInEditMode(state)) {
      return;
    }
    this._page = state.sp_page.entities.page;
    this._pageId = state.root.route.pageId;
    if (this._pageId && !this._page) {
      localStore.dispatch(retrievePage(this._pageId));
      return;
    }
    this._pageAction = state.sp_page.ui.pageSectionSelection.action;
    if (this._pageAction) {
      switch(this._pageAction) {
        case PAGE_SELECTION_ACTION_EDIT:
          // @NOTE: we use the page draft as it is a copy and has things like markdown from partition for details, etc.
          this._page = state.sp_page.ui.draftPage;
          break;
        default:
          Log.error(`unexepcted page action: ${this._pageAction}`);
      }
    }
  }

  /**
   * As long as the action value and page id haven't been altered, we know we're still editing the page.
   */
  _activelyWorkingInEditMode(state) {
    return (
      this._pageId == state.root.route.pageId
      && this._pageAction == state.sp_page.ui.pageSectionSelection.action
      && this._pageAction == PAGE_SELECTION_ACTION_EDIT
    );
  }

  _saveEditedPage() {
    localStore.dispatch(savePageEdits(this._page));
  }
}

window.customElements.define('sp-page', SpPage);
