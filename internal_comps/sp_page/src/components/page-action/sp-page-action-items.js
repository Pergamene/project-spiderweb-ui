import { html, LitElement } from '@polymer/lit-element';

import { EditHoverIcon } from '../../../../sp_shared/src/entities/sp-icons.js';

import '../../../../sp_shared/src/components/sp-icon-btn.js';

export class SpPageActionItems extends LitElement {
  render() {
    return html`
    <sp-icon-btn .icon="${EditHoverIcon}" darkBackground></sp-icon-btn>        
    `
  }
}

window.customElements.define('sp-page-action-items', SpPageActionItems);
