import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles.js';

import './sp-page-detail.js';
import './edit/sp-page-detail-edit.js';
import '../options-pane/sp-dropdown-btn.js';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { PAGE_SELECTION_ACTION_EDIT, PAGE_SECTION_TYPE_DETAIL } from '../../state/action.js';
import { Log } from 'interface-handler/src/logger.js';

export class SpPageDetails extends LitElement {
  render() {
    return html`
      ${SpPageStyles}
      <style>
        :host {
          margin: 20px 0;
        }

        sp-page-detail:first-child {
          margin-bottom: 0;
        }

        sp-page-detail {
          margin-bottom: 10px;
        }

        [page-pane] {
          border-top: 1px solid var(${APP_COLORS.NEAR_WHITE_BORDER});
          align-self: center;
          padding: 7px 0 8px 0; /* 7px due to border */
        }

        [page-pane] h2 {
          letter-spacing: 3px;
          margin: 0;
          color: var(${APP_COLORS.NEAR_WHITE_BORDER});
        }
      </style>
      <div page-pane-section>
        <div options-pane>
          <sp-dropdown-btn revealed></sp-dropdown-btn>
        </div>
        <div page-pane>
          <h2>DETAILS</h2>
        </div>
      </div>
      ${this.page.details.map((detail, index) => this._getDetailHtml(detail, index))}
    `
  }

  static get properties() { 
    return {
      page: { type: Object },
      pageSectionSelection: { type: Object }
    }
  }

  _getDetailHtml(detail, index) {
    if (!this.pageSectionSelection.action) {
      return html`
        <sp-page-detail .detail="${detail}" .detailId="${index}"></sp-page-detail>
      `;
    }
    switch (this.pageSectionSelection.action && this.pageSectionSelection === PAGE_SECTION_TYPE_DETAIL) {
      case PAGE_SELECTION_ACTION_EDIT:
        return html`
          <sp-page-detail-edit .detail="${detail}"></sp-page-detail-edit>
        `;
      default:
        Log.error(`unexpected action: ${this.action}`);
        return html``;
    }
  }
}

window.customElements.define('sp-page-details', SpPageDetails);
