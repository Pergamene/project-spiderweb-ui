import { css } from 'lit-element';
import { SHADOW_ELEVATIONS } from './sp-shared-style-values.js';

const COLORS = {
  DARK_TEXT_COLOR: css`#FFF`,
  LIGHT_TEXT_COLOR: css`#212121`
};

export const BTN_COLORS = {
  PRIMARY: {
    TEXT_COLOR: COLORS.DARK_TEXT_COLOR,
    BACKGROUND_COLOR: css`#2196F3`
  },
  SECONDARY: {
    TEXT_COLOR: COLORS.DARK_TEXT_COLOR,
    BACKGROUND_COLOR: css`#B0BEC5`
  },
  BACK: {
    TEXT_COLOR: COLORS.DARK_TEXT_COLOR,
    BACKGROUND_COLOR: css`#424242`
  },
  WARNING: {
    TEXT_COLOR: COLORS.DARK_TEXT_COLOR,
    BACKGROUND_COLOR: css`#f44336`
  },
  DISABLED: {
    TEXT_COLOR: css`#9E9E9E`,
    BACKGROUND_COLOR: css`#BDBDBD`
  },
  DARK_BTN_TEXT_COLOR: COLORS.DARK_TEXT_COLOR,
  LIGHT_BTN_TEXT_COLOR: COLORS.LIGHT_TEXT_COLOR
};

// @NOTE: imported with SpSharedStyles. Do not import otherwise.
export const SpBtnBaseStyles = css`
  button:focus {
    outline: 0;
  }

  button.sp-btn {
    border: none;
    line-height: 40px;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 2px;
    padding: 0 16px;
    font-weight: 500;
    box-shadow: ${SHADOW_ELEVATIONS.LEVEL_1.BASE};
  }

  button.sp-btn:hover {
    box-shadow: ${SHADOW_ELEVATIONS.LEVEL_1.HOVER};
  }

  button.sp-btn:active {
    box-shadow: ${SHADOW_ELEVATIONS.LEVEL_1.INSET};
  }

  button.sp-btn.btn-warning {
    background-color: ${BTN_COLORS.WARNING.BACKGROUND_COLOR};
    color: ${BTN_COLORS.WARNING.TEXT_COLOR};
  }

  button.sp-btn.btn-warning .button.sp-btn-svg-icon {
    fill: ${BTN_COLORS.WARNING.TEXT_COLOR};
  }

  button.sp-btn.btn-back {
    background-color: ${BTN_COLORS.BACK.BACKGROUND_COLOR};
    color: ${BTN_COLORS.BACK.TEXT_COLOR};
  }

  button.sp-btn.btn-back .button.sp-btn-svg-icon {
    fill: ${BTN_COLORS.BACK.TEXT_COLOR};
  }

  button.sp-btn.btn-primary {
    background-color: ${BTN_COLORS.PRIMARY.BACKGROUND_COLOR};
    color: ${BTN_COLORS.PRIMARY.TEXT_COLOR};
  }

  button.sp-btn.btn-primary .button.sp-btn-svg-icon {
    fill: ${BTN_COLORS.PRIMARY.TEXT_COLOR};
  }

  button.sp-btn.btn-secondary {
    background-color: ${BTN_COLORS.SECONDARY.BACKGROUND_COLOR};
    color: ${BTN_COLORS.SECONDARY.TEXT_COLOR};
  }

  button.sp-btn.btn-secondary .button.sp-btn-svg-icon {
    fill: ${BTN_COLORS.SECONDARY.TEXT_COLOR};
  }

  button.sp-btn[disabled] {
    background-color: ${BTN_COLORS.DISABLED.BACKGROUND_COLOR};
    color: ${BTN_COLORS.DISABLED.TEXT_COLOR};
    box-shadow: none;
  }

  button.sp-btn[disabled]:hover {
    box-shadow: none;
  }

  button.sp-btn[disabled]:active {
    box-shadow: none;
  }

  button.sp-btn[disabled] .button.sp-btn-svg-icon {
    fill: ${BTN_COLORS.DISABLED.TEXT_COLOR};
  }
`;
