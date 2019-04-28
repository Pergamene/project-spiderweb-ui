import { html, LitElement } from '@polymer/lit-element';

export class SpPageActionSelection extends LitElement {
  render() {
    return html`
    Selected: ${this.name}
    `
  }

  static get properties() { 
    return {
      name: { type: String }
    }
  }
}

window.customElements.define('sp-page-action-selection', SpPageActionSelection);
