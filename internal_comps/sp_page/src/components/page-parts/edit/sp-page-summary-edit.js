import { html, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { LOCALE_EN } from '../../../../../sp_locale/src/entities/en.js';

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

window.customElements.define('sp-page-summary-edit', SpPageSummaryEdit);
