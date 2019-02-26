import { html, svg } from '@polymer/lit-element';

export function MenuIcon(customClass) { return getBaseSvg(customClass, 'menu-svg-icon', svg`<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>`) }

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