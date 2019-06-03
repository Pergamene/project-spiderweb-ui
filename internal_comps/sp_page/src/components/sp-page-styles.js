import { css } from 'lit-element';

export const CONTENT_PANE = {
  WIDTH: css`200px`
};

export const EDIT_PANE = {
  WIDTH: css`60px`
};

export const PAGE_PANE = {
  WIDTH: css`600px`
};

export const SpPageStyles = css`
  [options-pane] {
    display: flex;
    width: ${EDIT_PANE.WIDTH};
    margin-top: 5px;
  }

  [page-pane] {
    width: 100%;
    max-width: ${PAGE_PANE.WIDTH};
    display: flex;
    flex-direction: column;
  }

  [page-pane-section] {
    display: flex;
  }
`;
