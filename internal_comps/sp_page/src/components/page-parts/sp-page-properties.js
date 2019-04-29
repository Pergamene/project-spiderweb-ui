import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import './sp-page-property.js';
import '../edit-pane/sp-dropdown-btn';
import { localStore } from '../../state/store.js';
import { selectPageProperties } from '../../state/action';

export class SpPageProperties extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          display: flex;
          margin: 20px 0;
        }

        sp-page-property:first-child {
          margin-top: 0;
        }

        sp-page-property {
          margin-top: 10px;
        }
      </style>
      <div edit-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>
      </div>
      <div page-pane>
        ${this.page.properties.map(property => this._getPropertyHtml(property))}
      </div>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }

  _getPropertyHtml(property) {
    return html`<sp-page-property .property="${property}" @click="${() => this._selectPageProperties()}"></sp-page-property>`;
  }

  _selectPageProperties() {
    localStore.dispatch(selectPageProperties());
  }
}

window.customElements.define('sp-page-properties', SpPageProperties);
