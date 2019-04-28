import { html, LitElement } from '@polymer/lit-element';

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
    if (partition.partitions) {
      return html`<sp-inner-partition class="${partition.type}" .partitions="${partition.partitions}"></sp-inner-partition>`;
    }
    return html`<span class="${partition.type}">${partition.value}</span>`;
  }
}

window.customElements.define('sp-inner-partition', SpInnerPartition);
