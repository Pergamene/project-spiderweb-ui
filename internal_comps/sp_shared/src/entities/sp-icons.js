import { html, svg } from '@polymer/lit-element';

export function MenuIcon(customClass) { return getBaseSvg(customClass, 'menu-svg-icon', svg`<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>`) }
export function EditHoverIcon(customClass) { return getBaseSvg(customClass, 'edit-hover-svg-icon', svg`<path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>`) }
export function AddHoverIcon(customClass) { return getBaseSvg(customClass, 'add-hover-svg-icon', svg`<path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>`) }
export function DownHoverIcon(customClass) { return getBaseSvg(customClass, 'down-hover-svg-icon', svg`<path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8M6 10l6 6 6-6-1.4-1.4-4.6 4.6-4.6-4.6L6 10z"/>`) }

function getBaseSvg(customClass, definedClass, svgContent) {
  const classes = [definedClass, customClass].join(' ');
  return html`<svg class="${classes}" viewBox="0 0 24 24" svg-icon>${svgContent}</svg>`
}

// @NOTE: imported with SpSharedStyles. Do not import otherwise.
export const SpIconsStyles = html`
<style>
  [svg-icon] {
    /** @DEBUG: defined as a const in SpSharedStyles, maybe we should keep them together? **/
    --sp_shared-default-svg-color: #212121;
    width: 24px;
    height: 24px;
    fill: var(--sp_shared-default-svg-color);
  }
</style>
`;