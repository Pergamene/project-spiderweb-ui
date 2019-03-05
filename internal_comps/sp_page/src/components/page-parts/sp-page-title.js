import { html, LitElement } from '@polymer/lit-element';

export class SpPageTitle extends LitElement {
  render() {
    return html`
      <style>
      </style>
      <h1>${this.page.title}</h1>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-title', SpPageTitle);
