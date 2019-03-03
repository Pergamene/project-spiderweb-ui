import { html } from '@polymer/lit-element';

export const NAV = {
  HEADER: {
    HEIGHT: '--sc_game-nav-header-height'
  },
  FOOTER: {
    HEIGHT: '--sc_game-nav-footer-height'
  }
}

export const SpPageStyles = html`
<style>
  :host {
    --sc_game-nav-header-height: 46px;
    --sc_game-nav-footer-height: 46px;
  }
</style>
`;
