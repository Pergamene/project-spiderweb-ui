import { html } from '@polymer/lit-element';
import { SHADOW_ELEVATIONS } from './sp-shared-style-values.js';

export const BTN_COLORS = {
  PRIMARY: {
    TEXT_COLOR: '--sp_btn-dark-btn-text-color',
    BACKGROUND_COLOR: '--sp_btn-primary-background-color'
  },
  SECONDARY: {
    TEXT_COLOR: '--sp_btn-dark-btn-text-color',
    BACKGROUND_COLOR: '--sp_btn-secondary-background-color'
  },
  BACK: {
    TEXT_COLOR: '--sp_btn-dark-btn-text-color',
    BACKGROUND_COLOR: '--sp_btn-back-background-color'
  },
  WARNING: {
    TEXT_COLOR: '--sp_btn-dark-btn-text-color',
    BACKGROUND_COLOR: '--sp_btn-warning-background-color'
  },
  DISABLED: {
    TEXT_COLOR: '--sp_btn-disabled-text-color',
    BACKGROUND_COLOR: '--sp_btn-disabled-background-color'
  },
  DARK_BTN_TEXT_COLOR: '--sp_btn-dark-btn-text-color',
  LIGHT_BTN_TEXT_COLOR: '--sp_btn-light-btn-text-color'
};

// @NOTE: imported with SpSharedStyles. Do not import otherwise.
export const SpBtnBaseStyles = html`
<style>
  :host {
    --sp_btn-dark-btn-text-color: #FFF;
    --sp_btn-light-btn-text-color: #212121;
    --sp_btn-warning-background-color: #f44336;
    --sp_btn-back-background-color: #424242;
    --sp_btn-primary-background-color: #2196F3;
    --sp_btn-secondary-background-color: #B0BEC5;
    --sp_btn-disabled-text-color: #9E9E9E;
    --sp_btn-disabled-background-color: #BDBDBD;
  }

  button.sp-btn {
    border: none;
    line-height: 40px;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 0 16px;
    font-weight: 500;
    box-shadow: var(${SHADOW_ELEVATIONS.LEVEL_1.BASE});
  }

  button.sp-btn:hover {
    box-shadow: var(${SHADOW_ELEVATIONS.LEVEL_1.HOVER});
  }

  button.sp-btn:active {
    box-shadow: var(${SHADOW_ELEVATIONS.LEVEL_1.INSET});
  }

  button.sp-btn.btn-warning {
    background-color: var(${BTN_COLORS.WARNING.BACKGROUND_COLOR});
    color: var(${BTN_COLORS.WARNING.TEXT_COLOR});
  }

  button.sp-btn.btn-warning .button.sp-btn-svg-icon {
    fill: var(${BTN_COLORS.WARNING.TEXT_COLOR});
  }

  button.sp-btn.btn-back {
    background-color: var(${BTN_COLORS.BACK.BACKGROUND_COLOR});
    color: var(${BTN_COLORS.BACK.TEXT_COLOR});
  }

  button.sp-btn.btn-back .button.sp-btn-svg-icon {
    fill: var(${BTN_COLORS.BACK.TEXT_COLOR});
  }

  button.sp-btn.btn-primary {
    background-color: var(${BTN_COLORS.PRIMARY.BACKGROUND_COLOR});
    color: var(${BTN_COLORS.PRIMARY.TEXT_COLOR});
  }

  button.sp-btn.btn-primary .button.sp-btn-svg-icon {
    fill: var(${BTN_COLORS.PRIMARY.TEXT_COLOR});
  }

  button.sp-btn.btn-secondary {
    background-color: var(${BTN_COLORS.SECONDARY.BACKGROUND_COLOR});
    color: var(${BTN_COLORS.SECONDARY.TEXT_COLOR});
  }

  button.sp-btn.btn-secondary .button.sp-btn-svg-icon {
    fill: var(${BTN_COLORS.SECONDARY.TEXT_COLOR});
  }

  button.sp-btn[disabled] {
    background-color: var(${BTN_COLORS.DISABLED.BACKGROUND_COLOR});
    color: var(${BTN_COLORS.DISABLED.TEXT_COLOR});
    box-shadow: none;
  }

  button.sp-btn[disabled]:hover {
    box-shadow: none;
  }

  button.sp-btn[disabled]:active {
    box-shadow: none;
  }

  button.sp-btn[disabled] .button.sp-btn-svg-icon {
    fill: var(${BTN_COLORS.DISABLED.TEXT_COLOR});
  }
</style>
`;
