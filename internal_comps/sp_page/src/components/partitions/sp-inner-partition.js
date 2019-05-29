import { html, LitElement, css } from 'lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values';

export class SpInnerPartition extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline;
      }

      .bold {
        font-weight: 700;
      }

      .italics {
        font-style: italic;
      }

      a {
        color: ${APP_COLORS.LINK_BLUE};
      }

      a:hover {
        color: ${APP_COLORS.LINK_HOVER};
      }

      a:visited {
        color: ${APP_COLORS.LINK_VISITED};
      }

      .relation {
        text-decoration: underline;
        color: ${APP_COLORS.RELATION_PINK};
      }
    `;
  }

  render() {
    return html`
      ${this.partitions.map(partition => this._getPartitionHtml(partition))}      
    `;
  }

  static get properties() { 
    return {
      partitions: { type: Array }
    };
  }

  _getPartitionHtml(partition) {
    if (partition.partitions) {
      return html`<sp-inner-partition class="${partition.type}" .partitions="${partition.partitions}"></sp-inner-partition>`;
    }
    let partitionClass = partition.type;
    switch (partitionClass) {
      case 'link':
        return html`<a href="${partition.link}">${partition.value}</a>`;
      //@TODO: finish when sp-relation-link is finished
      // case 'relation':
      //   return html`<sp-relation-link class="${partition.type}" .relation="${partition.relation}"></sp-relation-link>`;
      case 'color':
        return html`<span class="${partition.type}" style="color:${partition.color}">${partition.value}</span>`
      default: 
        return html`<span class="${partition.type}">${this._replaceNewlineWithBreak(partition)}</span>`;
    }
  }

  _replaceNewlineWithBreak(partition) {
    let lines = partition.value.split('\n');
    if (lines.length > 1) {
      lines = lines.filter(line => line !== '');
      return html`<span class="${partition.type}">${lines.map((line) => html`${line}<br>`)}</span>`;
    }
    return html`${partition.value}`;
  }
}

customElements.define('sp-inner-partition', SpInnerPartition);