import { css } from 'lit-element';

export const APP_COLORS = {
  NEAR_BLACK: css`#222426`,
  NEAR_BLACK_FOCUS: css`#333537`,
  NEAR_WHITE: css`#F7FBFF`,
  BASE_WHITE: css`#FFF`,
  BASE_WHITE_FOCUS: css`#EEE`,
  NEAR_WHITE_BORDER: css`#E7EBEF`,
  OFF_BLACK: css`#525456`,
  HINT_GRAY: css`#798183`,
  LINK_BLUE: css`#5472D3`,
  LINK_HOVER: css`#0d47a1`,
  LINK_VISITED: css`#002171`,
  RELATION_PINK: css`#BC477B`,
  RELATION_VISITED: css`#560027`,
  IMAGE_CAPTION: css`#666666`,
  OVERLAY_BLACK: css`rgba(0, 0, 0, 0.5)`,
  OVERLAY_WHITE: css`rgba(255, 255, 255, 0.8)`
};

export const SHADOW_ELEVATIONS = {
  LEVEL_1: {
    BASE: css`1px 1px 5px rgba(0, 0, 0, 0.4)`,
    INSET: css`inset 1px 1px 5px rgba(0, 0, 0, 0.4)`,
    HOVER: css`
      1px 1px 5px rgba(0, 0, 0, 0.4),
      inset 0px 0px 80px rgba(0, 0, 0, 0.1)`
  },
  SIDE_BAR: {
    BASE: css`-2px 0px 10px rgba(0, 0, 0, 0.1)`
  }
};

export const COMMON_ELEMENTS = {
  HEADER: {
    HEIGHT: css`46px`
  },
  FOOTER: {
    HEIGHT: css`46px`
  }
};