import { html } from '@polymer/lit-element';

export const LOCALE_EN = {
  SP_ROOT: {
    PAGE_NOT_FOUND: {
      P1: 'These are not the pages you\'re looking for.',
      P2: html`<a href="/">Move along now.</a>`
    },
    TITLE: {
      APP_NAME: 'Project Spiderweb',
      PAGE: 'PAGE',
      NOT_FOUND: '404 - NOT FOUND'
    }
  },
  SP_BTN: {
    PRESET: {
      BACK: 'back',
      CANCEL: 'cancel',
      DONE: 'done'
    },
    OTHER: {
      
    }
  },
  SP_PAGE_SELECTION: {
    selected: (selection) => `Selected: ${selection}`,
    editing: (selection) => `Editing: ${selection}`,
    SELECTIONS: {
      OVERVIEW: 'Page Overview',
      PROPERTIES: 'Page Properties',
      DETAIL: 'Page Detail',
      NONE: 'None'
    }
  },
  SP_PAGE_EDIT: {
    PAGE_TITLE: {
      LABEL: 'Title'
    },
    PAGE_SUMMARY: {
      LABEL: 'Summary'
    },
    DETAIL_TITLE: {
      LABEL: 'Detail Name'
    },
    DETAIL_SUMMARY: {
      LABEL: 'Summary'
    },
    DETAIL_MARKDOWN: {
      LABEL: 'Detail Markdown'
    }
  }
};

