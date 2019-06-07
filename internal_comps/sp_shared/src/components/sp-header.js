import { html, LitElement, css } from 'lit-element';

import { APP_COLORS, COMMON_ELEMENTS } from '../entities/sp-shared-style-values.js';
import { MenuIcon, SpIconsStyles } from '../entities/sp-icons.js';

import { localStore } from '../state/store.js';

import '../components/sp-icon-btn.js';

export class SpHeader extends LitElement {
  static get styles() {
    return [SpIconsStyles, css`
      header {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        background-color: ${APP_COLORS.NEAR_BLACK};
        color: ${APP_COLORS.BASE_WHITE};
        height: ${COMMON_ELEMENTS.HEADER.HEIGHT};
      }

      .drawer {
        position: fixed;
        width: 240px;
        padding: 20px 0;
        right: 0;
        top: ${COMMON_ELEMENTS.HEADER.HEIGHT};
        height: calc(100vh - ${COMMON_ELEMENTS.HEADER.HEIGHT});
        background-color: ${APP_COLORS.NEAR_BLACK};
        color: ${APP_COLORS.BASE_WHITE};
      }

      [svg-icon] {
        fill: ${APP_COLORS.BASE_WHITE};
      }

      .drawer-item {
        display: flex;
        align-items: center;
        padding: 12px 20px;
      }

      .drawer-item-icon {
        width: 24px; /* @NOTE: even if the icon is empty, we still want the space to be there so that the texts align */
        height: 24px; /* @NOTE: this is because the icons are stubborn and are setting height to 28px for no reason */
        margin-right: 10px;
      }

      .drawer-item-clickable {
        cursor: pointer;
      }

      .drawer-item-text {
        font-weight: 500;
      }

      .drawer-item:hover {
        background-color: ${APP_COLORS.NEAR_BLACK_FOCUS};
      }

      .drawer-item:active {
        background-color: ${APP_COLORS.NEAR_BLACK_FOCUS};
      }
    `];
  }

  render() {
    return html`
      <header>
        <div class="left-items">
          <slot></slot>
        </div>
        <div class="right-items">
          <sp-icon-btn .icon="${MenuIcon}" @click="${this._toggleDrawer}" darkBackground></sp-icon-btn>
        </div>
      </header>
      ${this._drawerHtml()}
    `;
  }

  static get properties() { 
    return {
      drawerOpen: { type: Boolean },
      drawerItems: { type: Array }
    };
  }

  _toggleDrawer(e) {
    this.drawerOpen = !this.drawerOpen;
    e.stopPropagation();
  }

  _drawerHtml() {
    if (this.drawerOpen) {
      return html`
        <div class="drawer">
          ${this._getDrawerItems()}
        </div>
      `;
    }
    return html``;
  }

  _getDrawerItems() {
    let items = [];
    for (let drawerItem of this.drawerItems) {
      // @NOTE: classMap would be the better option, but it's not working: https://lit-html.polymer-project.org/guide/template-reference#classmap
      if (drawerItem.dispatchAction) {
        items.push(html`
          <div class="drawer-item drawer-item-clickable" @click="${this._handleDrawerItemClick(drawerItem)}">
            <div class="drawer-item-icon">${drawerItem.iconFunc()}</div>
            <div class="drawer-item-text">${drawerItem.text}</div>
          </div>
        `);
      } else {
        items.push(html`
          <div class="drawer-item"  @click="${this._handleDrawerItemClick(drawerItem)}">
            <div class="drawer-item-icon">${drawerItem.iconFunc()}</div>
            <div class="drawer-item-text">${drawerItem.text}</div>
          </div>
        `);
      }
    }
    return items;
  }

  _handleDrawerItemClick(drawerItem) {
    debugger;
    localStore.dispatch(drawerItem.dispatchAction);
  }
}

customElements.define('sp-header', SpHeader);
