import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

import '../partitions/sp-page-partition.js';
import '../options-pane/sp-dropdown-btn';

export class SpPageDetail extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          display: flex;
        }

        h1 {
          font-size: 18px;
          color: var(${APP_COLORS.HINT_GRAY});
        }

        .summary {
          font-size: 14px;
          line-height: 24px;
          border-left: 2px solid var(${APP_COLORS.OFF_BLACK});
          padding: 5px 10px;
          width: calc(100% - 2px - 10px - 10px);
          background-color: var(${APP_COLORS.NEAR_WHITE});
        }
      </style>
      <div options-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>
      </div>
      <div page-pane>
        <h1>${this.detail.title}</h1>
        <p class="summary">${this.detail.summary}</p>
        ${this.detail.partitions.map(partition => this._getPartitionHtml(partition))}
      </div>
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
