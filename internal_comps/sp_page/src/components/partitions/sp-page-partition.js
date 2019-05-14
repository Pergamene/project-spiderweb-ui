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

        .quotes {
          font-size: 14px;
          line-height: 24px;
          border-left: 2px solid var(${APP_COLORS.OFF_BLACK});
          padding: 5px 10px;
          background-size: 100%;
          background-color: var(${APP_COLORS.NEAR_WHITE});
          display: block;
        }

        .image {
          max-width: 100%;
          height: auto;
        }

        figure {
          text-align: center;
        }

        figcaption {
          font-size: 11px;
          font-weight: bolder;
          text-transform: uppercase;
          color: var(${APP_COLORS.IMAGE_CAPTION});
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
    let partitionClass = this.partition.type;
    switch (partitionClass) {
      case 'ul':
        return html`<ul>${this._getListItemHtml()}</ul>`;
      case 'ol':
        return html`<ol>${this._getListItemHtml()}</ol>`;
      case 'image':
        return html`<figure class="${partitionClass} outer-partition">${this._getImageHtml()}</figure>`;
      case 'hr':
        return html`<hr>`;
      case 'p':
        return html`<p><sp-inner-partition class="${partitionClass} outer-partition" .partitions="${this.partition.partitions}"></sp-inner-partition></p>`;
      case 'quotes':
        return this._getQuotesHtml();
      default:
        return html`<div class="${partitionClass} outer-partition">${this.partition.value}</div>`;
    } 
  }

  _getListItemHtml() {
    return html`${this.partition.items.map((item) => html`<li><sp-inner-partition class="${this.partition.type} outer-partition" .partitions="${[item]}"></sp-inner-partition></li>`)}`;
  }

  _getImageHtml() {
    if (!this.partition.altText) {
      return html`<img class="${this.partition.type}" src="${this.partition.link}" alt="">`;
    } else {
      return html`<img class="${this.partition.type}" src="${this.partition.link}" alt="${this.partition.altText}"><figcaption>${this.partition.altText}</figcaption>`;
    }
  }

  _getQuotesHtml() {
    if(this.partition.partitions) {
      return html`<sp-inner-partition class="${this.partition.type} outer-partition" .partitions="${this.partition.partitions}"></sp-inner-partition>`;
    } else {
      let lines = this.partition.value.split('\n');
      return html`<div class="${this.partition.type} outer-partition">${lines.map((line) => html`${line}<br>`)}</div>`;
    }
  }
}

window.customElements.define('sp-page-partition', SpPagePartition);