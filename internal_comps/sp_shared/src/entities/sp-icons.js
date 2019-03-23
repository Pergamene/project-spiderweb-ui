import { html, svg } from '@polymer/lit-element';

export function MenuIcon(customClass) { return getBaseSvg(customClass, 'menu-svg-icon', svg`<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>`) }
export function EditHoverIcon(customClass) { return getBaseSvg(customClass, 'edit-over-svg-icon', svg`<path d="M14.06 9l.94.94L5.92 19H5v-.92L14.06 9m3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>`) }

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