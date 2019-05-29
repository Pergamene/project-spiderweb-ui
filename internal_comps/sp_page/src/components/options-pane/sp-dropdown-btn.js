import { LitElement, html, css } from 'lit-element';
import { DownHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';

class SpDropdownBtn extends LitElement {
  render() {
    return this._getRevealedHTML();
  };
  
  static get properties() { 
    return {
      selected: { type: Boolean },
      revealed: { type: Boolean }
    };
  };

  _getRevealedHTML() {
    if (!this.revealed) {
      return html``;
    }
    return html`<sp-icon-btn .icon="${DownHoverIcon}" @click="${() => this._openMenu()}" subtleHover></sp-icon-btn>`;
  }

  _openMenu() {
    this.selected = true;
    console.trace('@TODO: opened dropdown menu');
  }
}
customElements.define('sp-dropdown-btn', SpDropdownBtn);