import { html, LitElement } from '@polymer/lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values';

export class SpInnerPartition extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: inline;
        }

        .bold {
          font-weight: 700;
        }

        .italics {
          font-style: italic;
        }

        .link {
          text-decoration: underline;
          color: var(${APP_COLORS.LINK_BLUE});
        }

        .relation {
          text-decoration: underline;
          color: var(${APP_COLORS.RELATION_PINK});
        }
        /*color*/

      </style>
      ${this.partitions.map(partition => this._getPartitionHtml(partition))}      
    `
  }

  static get properties() { 
    return {
      partitions: { type: Array }
    }
  }

  _getPartitionHtml(partition) {
    console.log(partition);
    if (partition.partitions) {
      return html`<sp-inner-partition class="${partition.type}" .partitions="${partition.partitions}"></sp-inner-partition>`;
    }
    return html`<span class="${partition.type}">${partition.value}</span>`;
  }
}

window.customElements.define('sp-inner-partition', SpInnerPartition);