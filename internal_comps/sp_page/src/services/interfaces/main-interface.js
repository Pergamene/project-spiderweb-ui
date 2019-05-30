import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';

import * as CallHttp from './http/main-http-interface.js';
import * as CallMock from './mock/main-mock-interface.js';

export const getPage = (pageId) => {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.getPage(pageId);
    case INTERFACE_STATE.MOCK:
      return CallMock.getPage(pageId);
    default:
      return InterfaceState.invalid();
  }
};

export const setDetail = (pageId, detailId, detail) => {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.setDetail(pageId, detailId, detail);
    case INTERFACE_STATE.MOCK:
      return CallMock.setDetail(pageId, detailId, detail);
    default:
      return InterfaceState.invalid();
  }
};
