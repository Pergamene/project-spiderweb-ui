import { LitElement, html } from '@polymer/lit-element';
import { LOCALE_EN } from '../../internal_comps/sp_locale/src/entities/en.js';

class Sp404 extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          padding: 40px;
        }
      </style>
      <h1>${LOCALE_EN.SP_ROOT.PAGE_NOT_FOUND.P1}</h1>
      <h2>${LOCALE_EN.SP_ROOT.PAGE_NOT_FOUND.P2}</h2>
    `;
  }
}

window.customElements.define('sp-404', Sp404);
