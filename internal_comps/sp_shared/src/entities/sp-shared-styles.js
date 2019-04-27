import { html } from '@polymer/lit-element';

// @NOTE: only import once at root
export const SpSharedStyles = html`
<style>
  :host {
    --sp_shared-near-black: #222426;
    --sp_shared-near-black-focus: #333537;
    --sp_shared-near-white: #F7FBFF;
    --sp_shared-base-white: #FFF;
    --sp_shared-base-white-focus: #EEE;
    --sp_shared-near-white-border: #E7EBEF;
    --sp_shared-off-black: #525456;
    --sp_shared-hint-gray: #798183;
    --sp_shared-link-blue: #5472D3;
    --sp_shared-link-hover: #0d47a1;
    --sp_shared-link-visited: #002171;
    --sp_shared-relation-pink: #BC477B;
    --sp_shared-relation-visited: #560027;
    --sp_shared-image-caption: #666666;
    
    --sp_shared-overlay-black: rgba(0, 0, 0, 0.5);
    --sp_shared-overlay-white: rgba(255, 255, 255, 0.8);

    --sp_shared-elevation-1: 1px 1px 5px rgba(0, 0, 0, 0.4);
    --sp_shared-elevation-n1: inset 1px 1px 5px rgba(0, 0, 0, 0.4);
    --sp_shared-elevation-h1:
      1px 1px 5px rgba(0, 0, 0, 0.4),
      inset 0px 0px 80px rgba(0, 0, 0, 0.1);
    --sp_shared-elevation-side-bar: -2px 0px 10px rgba(0, 0, 0, 0.1);
  }
</style>
`;