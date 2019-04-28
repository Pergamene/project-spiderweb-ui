import { html, LitElement } from '@polymer/lit-element';
import { SpPageStyles } from '../sp-page-styles';

import './sp-page-detail.js';
import '../edit-pane/sp-dropdown-btn';
import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values';

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
        <div edit-pane>
          <sp-dropdown-btn revealed></sp-dropdown-btn>
        </div>
        <div page-pane>
          <h2>DETAILS</h2>
        </div>
      </div>
      ${this.page.details.map(detail => this._getDetailHtml(detail))}
    `
  }

  static get properties() { 
    return {
      page: { type: Object }
    }
  }

  _getDetailHtml(detail) {
    return html`<sp-page-detail .detail="${detail}"></sp-page-detail>`;
  }
}

window.customElements.define('sp-page-details', SpPageDetails);
