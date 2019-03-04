import { html, LitElement } from '@polymer/lit-element';

export class SpPageView extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: flex;
          width: 100vw;
          margin-top: var(${NAV.HEADER.HEIGHT});
          height: calc(100vh - var(${NAV.HEADER.HEIGHT}) - var(${NAV.FOOTER.HEIGHT}));
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
      </style>
    `
  }
}

window.customElements.define('sp-page-view', SpPageView);
