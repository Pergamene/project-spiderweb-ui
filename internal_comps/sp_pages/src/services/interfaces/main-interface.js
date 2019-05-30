import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';

import * as CallHttp from './http/main-http-interface.js';
import * as CallMock from './mock/main-mock-interface.js';

export const getPages = (nextBatchId) => {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.getPages(nextBatchId);
    case INTERFACE_STATE.MOCK:
      return CallMock.getPages(nextBatchId);
    default:
      return InterfaceState.invalid();
  }
};
