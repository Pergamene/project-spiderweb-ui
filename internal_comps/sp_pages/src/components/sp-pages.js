import { LitElement, html, css } from 'lit-element';

class SpPages extends LitElement {
  static get styles() {
    return css`
      :host {
        height: 100vh;
        width: 100vw;
      }
    `;
  }

  render() {
    return html`
      THIS IS A TEST
    `;
  }
}

customElements.define('sp-pages', SpPages);
