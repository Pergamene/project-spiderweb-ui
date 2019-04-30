import { html, LitElement } from '@polymer/lit-element';
import { LOCALE_EN } from '../../../../../sp_locale/src/entities/en';

import '../../../../../sp_shared/src/components/sp-inline-text-field.js';

export class SpPageTitleEdit extends LitElement {
  render() {
    this.page.title = "hello world";
    return html`
      <sp-inline-text-field .value="${this.page.title}" .label="${LOCALE_EN.SP_PAGE_EDIT.PAGE_TITLE.LABEL}"></sp-inline-text-field>
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }
}

window.customElements.define('sp-page-title-edit', SpPageTitleEdit);
