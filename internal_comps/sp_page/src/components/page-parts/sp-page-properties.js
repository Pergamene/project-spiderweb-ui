import { html, LitElement } from '@polymer/lit-element';

import './sp-page-property.js';

export class SpPageProperties extends LitElement {
  render() {
    return html`
      <style>
        :host {
          margin: 20px 0;
        }

        sp-page-property:first-child {
          margin-bottom: 0;
        }

        sp-page-property {
          margin-bottom: 10px;
        }
      </style>
      ${this.page.properties.map(property => this._getPropertyHtml(property))}
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
