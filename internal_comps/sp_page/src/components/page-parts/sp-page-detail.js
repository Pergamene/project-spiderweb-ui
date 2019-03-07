import { html, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

import '../partitions/sp-page-partition.js';

export class SpPageDetail extends LitElement {
  render() {
    return html`
      <style>
        h1 {
          font-size: 18px;
          color: var(${APP_COLORS.HINT_GRAY});
        }

        .summary {
          font-size: 14px;
          line-height: 24px;
          border-left: 2px solid var(${APP_COLORS.OFF_BLACK});
          padding: 5px 10px;
          width: 100%;
          background-color: var(${APP_COLORS.NEAR_WHITE});
        }
      </style>
      <h1>${this.detail.title}</h1>
      <p class="summary">${this.detail.summary}</p>
      ${this.detail.partitions.map(partition => this._getPartitionHtml(partition))}
    `
  }

  static get properties() { 
    return {
      detail: { type: Object }
    }
  }

  _getPartitionHtml(partition) {
    return html`<sp-page-partition .partition="${partition}"></sp-page-partition>`;
  }
}

window.customElements.define('sp-page-detail', SpPageDetail);
