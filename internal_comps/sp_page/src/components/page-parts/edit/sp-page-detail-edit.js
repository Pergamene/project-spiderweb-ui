import { html, LitElement, css } from 'lit-element';
import { SpPageStyles } from '../../sp-page-styles.js';
import { LOCALE_EN } from '../../../../../sp_locale/src/entities/en.js';

import '../../../../../sp_shared/src/components/sp-inline-text-field.js';

export class SpPageDetailEdit extends LitElement {
  static get styles() {
    return [SpPageStyles, css`
      :host {
        display: flex;
      }
    `];
  }

  render() {
    return html`
      <div options-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>
      </div>
      <div page-pane>
        <sp-inline-text-field
          .valueContainer="${this.detail}"
          .valueKey="${'title'}"
          .label="${LOCALE_EN.SP_PAGE_EDIT.DETAIL_TITLE.LABEL}"></sp-inline-text-field>
        <sp-inline-text-field
          .valueContainer="${this.detail}"
          .valueKey="${'summary'}"
          .label="${LOCALE_EN.SP_PAGE_EDIT.DETAIL_SUMMARY.LABEL}"
          multiline></sp-inline-text-field>
        <sp-inline-text-field
          .valueContainer="${this.detail}"
          .valueKey="${'markdown'}"
          .label="${LOCALE_EN.SP_PAGE_EDIT.DETAIL_MARKDOWN.LABEL}"
          multiline></sp-inline-text-field>
      </div>
    `;
  }

  static get properties() {
    return {
      detail: { type: Object },
    }
  }
}

customElements.define('sp-page-detail-edit', SpPageDetailEdit);
