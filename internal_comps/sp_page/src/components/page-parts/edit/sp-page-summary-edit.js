import { html, LitElement } from 'lit-element';
import { LOCALE_EN } from '../../../../../sp_locale/src/entities/en.js';

import '../../../../../sp_shared/src/components/sp-inline-text-field.js';

export class SpPageSummaryEdit extends LitElement {
  render() {
    return html`
      <sp-inline-text-field
          .valueContainer="${this.page}"
          .valueKey="${'summary'}"
          .label="${LOCALE_EN.SP_PAGE_EDIT.PAGE_SUMMARY.LABEL}"
          multiline></sp-inline-text-field>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

customElements.define('sp-page-summary-edit', SpPageSummaryEdit);
