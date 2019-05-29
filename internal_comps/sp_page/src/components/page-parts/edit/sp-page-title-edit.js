import { html, LitElement } from 'lit-element';
import { LOCALE_EN } from '../../../../../sp_locale/src/entities/en.js';

import '../../../../../sp_shared/src/components/sp-inline-text-field.js';

export class SpPageTitleEdit extends LitElement {
  render() {
    return html`
      <sp-inline-text-field
          .valueContainer="${this.page}"
          .valueKey="${'title'}"
          .label="${LOCALE_EN.SP_PAGE_EDIT.PAGE_TITLE.LABEL}"></sp-inline-text-field>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

customElements.define('sp-page-title-edit', SpPageTitleEdit);
