import { html, svg, css } from 'lit-element';

export function MenuIcon(customClass) { return getBaseSvg(customClass, 'menu-svg-icon', svg`<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>`) }
export function EditHoverIcon(customClass) { return getBaseSvg(customClass, 'edit-hover-svg-icon', svg`<path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>`) }
export function AddHoverIcon(customClass) { return getBaseSvg(customClass, 'add-hover-svg-icon', svg`<path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>`) }
export function DownHoverIcon(customClass) { return getBaseSvg(customClass, 'down-hover-svg-icon', svg`<path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8M6 10l6 6 6-6-1.4-1.4-4.6 4.6-4.6-4.6L6 10z"/>`) }
export function CloseHoverIcon(customClass) { return getBaseSvg(customClass, 'close-hover-svg-icon', svg`<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>`) }
export function SaveHoverIcon(customClass) { return getBaseSvg(customClass, 'save-hover-svg-icon', svg`<path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />`) }

// DRAWER ICONS
export function ViewPagesIcon(customClass) { return getBaseSvg(customClass, 'view-pages-svg-icon', svg`<path d="M16 15H9v-2h7v2m3-4H9V9h10v2m0-4H9V5h10v2M3 5v16h16v2H3a2 2 0 0 1-2-2V5h2m18-4a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2h14M7 3v14h14V3H7z"/>`) }
export function CreatePageIcon(customClass) { return getBaseSvg(customClass, 'create-page-svg-icon', svg`<path d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3M5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7V7m0 4h10v1.08c-.85.14-1.63.46-2.32.92H7v-2m0 4h5v2H7v-2z"/>`) }


// PAGE ICONS
export function UndefinedPageIcon(customClass) { return getBaseSvg(customClass, 'undefined-page-svg-icon', svg`<path d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H5m0 2h14v14H5V5m2 2v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7z"/>`) }

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