import { html, css, LitElement } from 'lit-element';

import { APP_COLORS } from '../../../../sp_shared/src/entities/sp-shared-style-values';

export class SpRelationLink extends LitElement {
  static get styles() {
    return css`
      .relation {
        text-decoration: underline;
        color: ${APP_COLORS.RELATION_PINK};
      }
    `;
  }

  render() {
    return html`<span class="${partition.type}">${partition.value}</span>`;
  }
  static get properties() {
    return {
      partition: { type: Object }
    };
  }
}

customElements.define('sp-relation-link', SpRelationLink);