import { html, LitElement, css } from 'lit-element';

export class SpPageTitle extends LitElement {
  static get styles() {
    return css`
      :host {
        line-height: 58px;
        font-size: 24px;
        font-weight: 700;
      }
    `;
  }

  render() {
    return html`
      ${this.page.title}
    `;
  }

  static get properties() { 
    return {
      page: { type: Object }
    };
  }
}

customElements.define('sp-page-title', SpPageTitle);
