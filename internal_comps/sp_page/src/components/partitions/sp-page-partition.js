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
          padding-bottom: 10px;
        }

        .h2 {
          font-size: 22px;
          font-weight: 700;
          color: var(${APP_COLORS.OFF_BLACK});
          padding-bottom: 10px;
        }

        .h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(${APP_COLORS.OFF_BLACK});
          padding-bottom: 10px;
        }

        .h4 {
          font-size: 18px;
          font-weight: 700;
          font-style: italic;
          color: var(${APP_COLORS.HINT_GRAY});
          padding-bottom: 10px;
        }

        .h5 {
          font-size: 16px;
          font-weight: 700;
          font-style: italic;
          color: var(${APP_COLORS.HINT_GRAY});
          padding-bottom: 10px;
        }

        .h6 {
          font-size: 14px;
          font-weight: 700;
          font-style: italic;
          color: var(${APP_COLORS.HINT_GRAY});
          padding-bottom: 10px;
        }

        .quote {
          font-size: 14px;
          line-height: 24px;
          border-left: 2px solid var(${APP_COLORS.OFF_BLACK});
          padding: 5px 10px;
          width: 100%;
          background-color: var(${APP_COLORS.NEAR_WHITE});
        }

        img {
          padding: 10px;
        }

        hr {
          border-color: var(${APP_COLORS.OFF_BLACK});
          border-width: .5px;
        }
        /*ul, ol, image, p*/

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

  // p, quote
  _getPartitionHtml() {
    //@TODO: Remove
    let part = this.partition;
    let parts = this.partition.partitions;
    // debugger;


    if (this.partition.partitions) {
      return html`<sp-inner-partition class="${this.partition.type} outer-partition" .partitions="${this.partition.partitions}"></sp-inner-partition>`;
    }
    let partitionClass = this.partition.type;
    switch (partitionClass) {
      case 'ul':
        return html`
          <ul>
            ${this.partition.items.map((item) => html`
            <li>
              <sp-inner-partition class="${this.partition.type} outer-partition" .partitions="${[item]}"></sp-inner-partition>
            </li>
            `)}
          </ul>
        `;
      case 'ol':
        return html`
          <ol>
            ${this.partition.items.map((item) => html`
            <li>
              <sp-inner-partition class="${this.partition.type} outer-partition" .partitions="${[item]}"></sp-inner-partition>
            </li>
            `)}
          </ol>
        `;
      case 'image':
        return html`<img class="${this.partition.type} outer-partition" src="${this.partition.link}" alt="${this.partition.altText ? this.partition.altText : ""}">`;
      case 'hr':
        return html`<hr class="${this.partition.type} outer-partition">`;
      default:
        return html`<div class="${this.partition.type} outer-partition">${this.partition.value}</div>`;
    } 
  }
}

window.customElements.define('sp-page-partition', SpPagePartition);