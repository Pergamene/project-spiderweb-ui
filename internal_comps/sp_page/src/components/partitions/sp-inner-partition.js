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

        a:link {
          color: var(${APP_COLORS.LINK_BLUE});
        }

        a:hover {
          color: var(${APP_COLORS.LINK_HOVER});
        }

        a:visited {
          color: var(${APP_COLORS.LINK_VISITED});
        }
        /*color*/

        /*@TODO: Remove*/
        .relation {
          text-decoration: underline;
          color: var(${APP_COLORS.RELATION_PINK});
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
    //@TODO: Remove
    // let part = partition;
    // let parts = partition.partitions;
    // debugger;
    
    console.log(partition);
    if (partition.partitions) {
      return html`<sp-inner-partition class="${partition.type}" .partitions="${partition.partitions}"></sp-inner-partition>`;
    }
    let partitionClass = partition.type;
    switch (partitionClass) {
      case 'link':
        return html`<a href="${partition.link}">${partition.value}</a>`;
      // case 'relation':
      //   return html`<sp-relation-link class="${partition.type}" .relation="${partition.relation}"></sp-relation-link>`;
      // case 'text': 

      case 'color':
        return html`<span class="${partition.type}" style="color:${partition.color}">${partition.value}</span>`
      default: 
        return html`<span class="${partition.type}">${partition.value}</span>`;
    }
  }
}

window.customElements.define('sp-inner-partition', SpInnerPartition);