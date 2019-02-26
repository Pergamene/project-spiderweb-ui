import { Http } from 'interface-handler/src/http.js';

export const getPage = (pageId) => {
  return Http.get(`page/${pageId}`);
}
