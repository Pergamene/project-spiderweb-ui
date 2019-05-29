import { html, LitElement, css } from 'lit-element';
import { SpPageStyles } from '../sp-page-styles.js';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';

import '../partitions/sp-page-partition.js';
import '../options-pane/sp-dropdown-btn.js';
import { localStore } from '../../state/store.js';
import { selectPageDetail } from '../../state/action.js';

export class SpPageDetail extends LitElement {
  static get styles() {
    return [SpPageStyles, css`
      :host {
        display: flex;
      }

      h1 {
        font-size: 18px;
        color: ${APP_COLORS.HINT_GRAY};
      }

      .summary {
        font-size: 14px;
        line-height: 24px;
        padding: 5px 10px;
        background-size: 100%;
        border-left: 2px solid ${APP_COLORS.OFF_BLACK};
        background-color: ${APP_COLORS.NEAR_WHITE};
      }
    `];
  }

  render() {
    return html`
      <div options-pane>
        <sp-dropdown-btn revealed></sp-dropdown-btn>
      </div>
      <div page-pane @click="${() => this._selectPageDetail()}">
        <h1>${this.detail.title}</h1>
        <p class="summary">${this.detail.summary}</p>
        ${this.detail.partitions.map(partition => this._getPartitionHtml(partition))}
      </div>
    `;
  }

  static get properties() { 
    return {
      detail: { type: Object },
      detailIndex: { type: Number }
    }
  }

  _selectPageDetail() {
    localStore.dispatch(selectPageDetail(this.detailIndex))
  }

  _getPartitionHtml(partition) {
    return html`<sp-page-partition .partition="${partition}"></sp-page-partition>`;
  }
}

customElements.define('sp-page-detail', SpPageDetail);
