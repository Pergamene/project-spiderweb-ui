import { html, LitElement, css } from 'lit-element';
import { APP_COLORS, COMMON_ELEMENTS } from '../../../../sp_shared/src/entities/sp-shared-style-values';
import { UndefinedPageIcon, SpIconsStyles } from '../../../../sp_shared/src/entities/sp-icons';

export class SpPagesListItem extends LitElement {
  static get styles() {
    return css`
      ${SpIconsStyles}

      :host {
        display: flex;
        align-items: center;
        border-radius: 2px;
        max-width: ${COMMON_ELEMENTS.MAIN_PANE.WIDTH};
      }

      .page-icon {
        height: 24px; /* @NOTE: this is because the icons are stubborn and are setting height to 28px for no reason */
        margin-left: 10px;
      }

      .page-icon [svg-icon] {
        fill: ${APP_COLORS.HINT_GRAY};
      }

      .page-details {
        margin-left: 10px;
        padding: 10px 0;
      }

      .title {
        font-size: 16px;
        font-weight: 500;
      }

      .summary {
        font-size: 13px;
        color: ${APP_COLORS.HINT_GRAY};
      }
    `;
  }

  render() {
    return html`
      <div class="page-icon">
        ${this._getPageIcon()}
      </div>
      <div class="page-details">
        <div class="title">${this.page.title}</div>
        <div class="summary">${this.page.summary}</div>
      </div>
    `;
  }

  static get properties() { 
    return {
      page: { type: Object }
    };
  }

  _getPageIcon() {
    if (!this.page.icon) {
      return UndefinedPageIcon();
    }
    console.trace('Need to add additional icons');
    return UndefinedPageIcon();
  }
}

customElements.define('sp-pages-list-item', SpPagesListItem);
