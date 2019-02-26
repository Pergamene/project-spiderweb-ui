import { LitElement, html } from '@polymer/lit-element';

class SpPage extends LitElement {
  render() {
    return html`
      <style>
        :host {
          height: 100vh;
          width: 100vw;
        }
      </style>
    `;
  }

  static get properties() { 
    return {
      pageId: { type: String }
    }
  }
}

window.customElements.define('sp-page', SpPage);
