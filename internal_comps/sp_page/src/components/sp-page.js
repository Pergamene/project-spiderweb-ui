import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { localStore } from '../state/store.js';

import './page-sections/sp-page-header.js';
import './page-sections/sp-page-view.js';
import './page-action/sp-page-action-footer.js';
import { SpPageStyles } from './sp-page-styles.js';
import { retrievePage, PAGE_SELECTION_ACTION_EDIT, savePageEdits } from '../state/action.js';
import { Log } from 'interface-handler/src/logger';

class SpPage extends connect(localStore)(LitElement) {
  static get styles() {
    return [SpPageStyles, css`
      :host {
        height: 100vh;
        width: 100vw;
      }
    `];
  }

  render() {
    return html`
      ${this._getPageViewHtml()}
      <sp-page-header></sp-page-header>
      <sp-page-action-footer @save-btn-clicked="${() => this._saveEditedPage()}"></sp-page-action-footer>
    `;
  }

  static get properties() { 
    return {
      _pageId: { type: String },
      _page: { type: Object },
      _pageSectionSelection: { type: String }
    }
  }

  constructor() {
    super();
    this._retrieveState = true;
  }

  _getPageViewHtml() {
    if (this._page) {
      return html`<sp-page-view .page="${this._page}" .selection="${this._pageSectionSelection}"></sp-page-view>`;
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
    if (this._pageId && this._retrieveState) {
      this._retrieveState = false;
      localStore.dispatch(retrievePage(this._pageId));
      return;
    }
    this._pageSectionSelection = state.sp_page.ui.pageSectionSelection;
    if (this._pageSectionSelection && this._pageSectionSelection.action) {
      switch(this._pageSectionSelection.action) {
        case PAGE_SELECTION_ACTION_EDIT:
          // @NOTE: we use the page draft as it is a copy and has things like markdown from partition for details, etc.
          this._page = state.sp_page.ui.draftPage;
          break;
        default:
          Log.error(`unexepcted page action: ${this._pageSectionSelection.action}`);
      }
    }
  }

  /**
   * As long as the action value and page id haven't been altered, we know we're still editing the page.
   */
  _activelyWorkingInEditMode(state) {
    return (
      this._pageSectionSelection
      && this._pageId == state.root.route.pageId
      && this._pageSectionSelection.action == state.sp_page.ui.pageSectionSelection.action
      && this._pageSectionSelection.action == PAGE_SELECTION_ACTION_EDIT
    );
  }

  _saveEditedPage() {
    localStore.dispatch(savePageEdits(this._page));
  }
}

customElements.define('sp-page', SpPage);
