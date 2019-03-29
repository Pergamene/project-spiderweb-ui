import { html, LitElement } from '@polymer/lit-element';

export class SpPageActionSelection extends LitElement {
  render() {
    return html`
    Selected: Page Summary
    `
  }
}

window.customElements.define('sp-page-action-selection', SpPageActionSelection);
