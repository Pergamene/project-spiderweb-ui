import { html, LitElement, css } from 'lit-element';
import { NAV, CONTENT_PANE, EDIT_PANE, PAGE_PANE } from '../sp-page-styles';


import '../page-parts/sp-page-overview.js';
import '../page-parts/sp-page-properties.js';
import '../page-parts/sp-page-details.js';
import { COMMON_ELEMENTS } from '../../../../sp_shared/src/entities/sp-shared-style-values';

export class SpPageView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        width: 100vw;
        justify-content: center;
        margin-top: ${COMMON_ELEMENTS.HEADER.HEIGHT};
        height: calc(100vh - ${COMMON_ELEMENTS.HEADER.HEIGHT} - ${COMMON_ELEMENTS.FOOTER.HEIGHT});
      }

      .left-column {
        display: flex;
        flex-direction: column;
        width: ${CONTENT_PANE.WIDTH};
        height: calc(100vh - ${COMMON_ELEMENTS.HEADER.HEIGHT} - ${COMMON_ELEMENTS.FOOTER.HEIGHT});
      }

      .right-column {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        max-width: calc(${PAGE_PANE.WIDTH} + ${EDIT_PANE.WIDTH});
      }
    `;
  }

  render() {
    return html`
      <div class="left-column">
        
      </div>
      <div class="right-column">
        <sp-page-overview .page="${this.page}" .selection="${this.selection}"></sp-page-overview>
        <sp-page-properties .page="${this.page}" .selection="${this.selection}"></sp-page-properties>
        <sp-page-details .page="${this.page}" .selection="${this.selection}"></sp-page-details>
        <sp-page-relations .page="${this.page}" .selection="${this.selection}"></sp-page-relations>
      </div>
    `;
  }

  static get properties() { 
    return {
      page: { type: Object },
      selection: { type: Object }
    };
  }
}

customElements.define('sp-page-view', SpPageView);
