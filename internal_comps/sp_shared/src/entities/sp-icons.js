import { html, svg, css } from 'lit-element';

export function MenuIcon(customClass) { return getBaseSvg(customClass, 'menu-svg-icon', svg`<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>`) }
export function EditHoverIcon(customClass) { return getBaseSvg(customClass, 'edit-hover-svg-icon', svg`<path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>`) }
export function AddHoverIcon(customClass) { return getBaseSvg(customClass, 'add-hover-svg-icon', svg`<path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>`) }
export function DownHoverIcon(customClass) { return getBaseSvg(customClass, 'down-hover-svg-icon', svg`<path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8M6 10l6 6 6-6-1.4-1.4-4.6 4.6-4.6-4.6L6 10z"/>`) }
export function CloseHoverIcon(customClass) { return getBaseSvg(customClass, 'close-hover-svg-icon', svg`<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>`) }
export function SaveHoverIcon(customClass) { return getBaseSvg(customClass, 'save-hover-svg-icon', svg`<path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />`) }


// PAGE ICONS
export function UndefinedPageIcon(customClass) { return getBaseSvg(customClass, 'undefined-page-svg-icon', svg`<path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"/>`) }

function getBaseSvg(customClass, definedClass, svgContent) {
  const classes = [definedClass, customClass].join(' ');
  return html`<svg class="${classes}" viewBox="0 0 24 24" svg-icon>${svgContent}</svg>`
}

// @NOTE: imported with SpSharedStyles. Do not import otherwise.
export const SpIconsStyles = css`
  [svg-icon] {
    width: 24px;
    height: 24px;
    fill: #212121;
  }
`;