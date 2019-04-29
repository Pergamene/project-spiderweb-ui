import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import '../page-parts/sp-page-title.js';
import '../page-parts/sp-page-summary.js';
import '../edit-pane/sp-dropdown-btn';
import { localStore } from '../../state/store.js';
import { selectPageOverview } from '../../state/action';

export class SpPageOverview extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          display: flex;
        }
      </style>
      <div edit-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>        
      </div>
      <div page-pane>
        <sp-page-title .page="${this.page}" @click="${() => this._selectPageOverview()}"></sp-page-title>
        <sp-page-summary .page="${this.page}" @click="${() => this._selectPageOverview()}"></sp-page-summary>
      </div>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }

  _selectPageOverview() {
    localStore.dispatch(selectPageOverview());
  }
}

window.customElements.define('sp-page-overview', SpPageOverview);
