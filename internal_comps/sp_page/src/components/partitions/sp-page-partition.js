import { html, LitElement } from '@polymer/lit-element';

import './sp-inner-partition.js';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

export class SpPagePartition extends LitElement {
  render() {
    return html`
      <style>
        .h1 {
          font-size: 24px;
          font-weight: 700;
          color: var(${APP_COLORS.OFF_BLACK});
        }

        .h2 {
          font-size: 22px;
          font-weight: 700;
          color: var(${APP_COLORS.OFF_BLACK});
        }

        .h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(${APP_COLORS.OFF_BLACK});
        }

        .h4 {
          font-size: 18px;
          font-weight: 700;
          font-style: italic;
          color: var(${APP_COLORS.HINT_GRAY});
        }

        .h5 {
          font-size: 16px;
          font-weight: 700;
          font-style: italic;
          color: var(${APP_COLORS.HINT_GRAY});
        }

        .h6 {
          font-size: 14px;
          font-weight: 700;
          font-style: italic;
          color: var(${APP_COLORS.HINT_GRAY});
        }

        .quote {
          font-size: 14px;
          line-height: 24px;
          border-left: 2px solid var(${APP_COLORS.OFF_BLACK});
          padding: 5px 10px;
          width: 100%;
          background-color: var(${APP_COLORS.NEAR_WHITE});
        }
        /*ul, ol, image, hr*/

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
    } /*else {
      let class = this.partition.type;
      switch (class) {

      }
    }*/
    return html`<div class="${this.partition.type} outer-partition">${this.partition.value}</div>`;    
  }
}

window.customElements.define('sp-page-partition', SpPagePartition);