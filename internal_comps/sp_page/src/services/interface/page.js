import { INTERFACE, interfaceState, invalidInterfaceState } from 'interface-handler/src/interface-state.js';

import * as CallHttp from './http/page.js';
import * as CallMock from './mock/page.js';

export const getPage = (pageId) => {
  switch (interfaceState()) {
    case INTERFACE.HTTP:
      return CallHttp.getPage(pageId);
    case INTERFACE.MOCK:
      return CallMock.getPage(pageId);
    default:
      return invalidInterfaceState();
  }
};
