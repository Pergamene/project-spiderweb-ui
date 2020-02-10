import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';

import * as CallHttp from './http/main-http-interface.js';
import * as CallMock from './mock/main-mock-interface.js';

export const createPage = (title, summary, templateId) => {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.createPage(title, summary, templateId);
    case INTERFACE_STATE.MOCK:
      return CallMock.createPage(title, summary, templateId);
    default:
      return InterfaceState.invalid();
  }
};
