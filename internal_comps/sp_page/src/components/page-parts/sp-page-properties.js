import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import './sp-page-property.js';

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
        <sp-edit-btn></sp-edit-btn>
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
    return html`<sp-page-property .property="${property}"></sp-page-property>`;
  }
}

window.customElements.define('sp-page-properties', SpPageProperties);
