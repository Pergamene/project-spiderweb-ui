import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';

import * as CallHttp from './http/main-http-interface.js';
import * as CallMock from './mock/main-mock-interface.js';

export const getPages = () => {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.getPages();
    case INTERFACE_STATE.MOCK:
      return CallMock.getPages();
    default:
      return InterfaceState.invalid();
  }
};
