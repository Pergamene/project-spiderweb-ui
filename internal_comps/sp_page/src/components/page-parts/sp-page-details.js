import { html, LitElement } from '@polymer/lit-element';

import './sp-page-detail.js';

export class SpPageDetails extends LitElement {
  render() {
    return html`
      <style>
        :host {
          margin: 20px 0;
        }

        sp-page-detail:first-child {
          margin-bottom: 0;
        }

        sp-page-detail {
          margin-bottom: 10px;
        }
      </style>
      ${this.page.details.map(detail => this._getDetailHtml(detail))}
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }

  _getDetailHtml(detail) {
    return html`<sp-page-detail .detail="${detail}"></sp-page-detail>`;
  }
}

window.customElements.define('sp-page-details', SpPageDetails);
