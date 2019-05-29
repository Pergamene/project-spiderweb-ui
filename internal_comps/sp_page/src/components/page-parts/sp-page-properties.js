import { html, LitElement, css } from 'lit-element';
import { SpPageStyles } from '../sp-page-styles.js';

import './sp-page-property.js';
import '../options-pane/sp-dropdown-btn.js';
import { localStore } from '../../state/store.js';
import { selectPageProperties } from '../../state/action.js';

export class SpPageProperties extends LitElement {
  static get styles() {
    return [SpPageStyles, css`
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
    `];
  }

  render() {
    return html`
      <div options-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>
      </div>
      <div page-pane>
        ${this.page.properties.map(property => this._getPropertyHtml(property))}
      </div>
    `;
  }

  static get properties() { 
    return {
      page: { type: Object },
      selection: { type: Object }
    }
  }

  _selectPageProperties() {
    localStore.dispatch(selectPageProperties());
  }

  _getPropertyHtml(property) {
    return html`<sp-page-property .property="${property}" @click="${() => this._selectPageProperties()}"></sp-page-property>`;
  }
}

customElements.define('sp-page-properties', SpPageProperties);
