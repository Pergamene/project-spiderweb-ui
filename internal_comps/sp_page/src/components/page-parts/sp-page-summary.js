import { html, LitElement } from '@polymer/lit-element';

export class SpPageSummary extends LitElement {
  render() {
    return html`
      <style>
      </style>
      <p>${this.page.summary}</p>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-summary', SpPageSummary);
