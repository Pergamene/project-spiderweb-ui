import { html, LitElement } from '@polymer/lit-element';

export class SpPageTitle extends LitElement {
  render() {
    return html`
      <style>
        :host {
          line-height: 58px;
          font-size: 24px;
          font-weight: 700;
        }
      </style>
      ${this.page.title}
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-title', SpPageTitle);
