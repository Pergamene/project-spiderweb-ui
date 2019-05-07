import { html, litElement, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values';

export class SpRelationLink extends LitElement {
  render() {
    return html`
      <style>
        .relation {
          text-decoration: underline;
          color: var(${APP_COLORS.RELATION_PINK});
        }
      </style>
      ${this._getPartitionHtml()}
    `
  }
  static get properties() {
    partition: { type: Object }
  }

  _getPartitionHtml() {
    return html`<span class="${partition.type}">${partition.value}</span>`;
  }
}

window.customElements.define('sp-relation-link', SpRelationLink);