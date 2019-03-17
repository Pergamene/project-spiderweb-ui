import { html, LitElement } from '@polymer/lit-element';

import './sp-inner-partition.js';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

export class SpPagePartition extends LitElement {
  render() {
    return html`
      <style>
        .h1 {
          font-size: 20px;
        }

        .h2 {
          font-size: 18px;
          color: var(${APP_COLORS.HINT_GRAY});
        }

        .outer-partition {
          margin: 10px 0;
        }
      </style>
      ${this._getPartitionHtml()}
    `
  }

  static get properties() { 
    return {
      partition: { type: Object }
    }
  }

  _getPartitionHtml() {
    if (this.partition.partitions) {
      return html`<sp-inner-partition class="${this.partition.type} outer-partition" .partitions="${this.partition.partitions}"></sp-inner-partition>`;
    }
    return html`<div class="${this.partition.type} outer-partition">${this.partition.value}</div>`;    
  }
}

window.customElements.define('sp-page-partition', SpPagePartition);
