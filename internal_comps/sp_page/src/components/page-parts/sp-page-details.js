import { html, LitElement, css } from 'lit-element';
import { SpPageStyles } from '../sp-page-styles.js';

import './sp-page-detail.js';
import './edit/sp-page-detail-edit.js';
import '../options-pane/sp-dropdown-btn.js';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values.js';
import { PAGE_SELECTION_ACTION_EDIT, PAGE_SECTION_TYPE_DETAIL } from '../../state/action.js';
import { Log } from 'interface-handler/src/logger.js';

export class SpPageDetails extends LitElement {
  static get styles() {
    return [SpPageStyles, css`
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
        border-top: 1px solid ${APP_COLORS.NEAR_WHITE_BORDER};
        align-self: center;
        padding: 7px 0 8px 0; /* 7px due to border */
      }

      [page-pane] h2 {
        letter-spacing: 3px;
        margin: 0;
        color: ${APP_COLORS.NEAR_WHITE_BORDER};
      }
    `];
  }

  render() {
    return html`
      <div page-pane-section>
        <div options-pane>
          <sp-dropdown-btn revealed></sp-dropdown-btn>
        </div>
        <div page-pane>
          <h2>DETAILS</h2>
        </div>
      </div>
      ${this.page.details.map((detail, index) => this._getDetailHtml(detail, index))}
    `;
  }

  static get properties() { 
    return {
      page: { type: Object },
      selection: { type: Object }
    }
  }

  _getDetailHtml(detail, index) {
    if (!this.selection.action || this.selection.type !== PAGE_SECTION_TYPE_DETAIL) {
      return html`
        <sp-page-detail .detail="${detail}" .detailIndex="${index}"></sp-page-detail>
      `;
    }
    switch (this.selection.action) {
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

customElements.define('sp-page-details', SpPageDetails);
