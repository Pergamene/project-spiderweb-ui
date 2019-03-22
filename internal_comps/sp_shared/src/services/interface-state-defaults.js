import { BaseEndpoint, InterfaceState, INTERFACE_STATE, RunState, RUN_STATE } from "interface-handler/src/interface-state";
import { Http } from "interface-handler/src/http";
import { Log } from "interface-handler/src/logger";

export function setDefaults() {
  setInterfaceStateDefaults();
  setRunStateDefaults();
  setHttpDefaults();
}

export function setInterfaceStateDefaults() {
  // @DEFAULT: Interface state
  InterfaceState.set(INTERFACE_STATE.HTTP);
  Log.debug(`Set Interface State to: ${InterfaceState.get()}`);
}

export function setRunStateDefaults() {
  RunState.set(RUN_STATE.LOCAL);
  Log.debug(`Set Run State to: ${InterfaceState.get()}`);
}

export function setHttpDefaults() {
  BaseEndpoint.setLocalBaseEndpoint('http://localhost:8782');
  Log.debug(`Set Base Endpoint to: ${BaseEndpoint.get()}`);
}

export function getDefaultHeaders() {
  let headers = Http.getDefaultJsonHeaders();
  headers['X-USER-ID'] = 'test@email.com';
  return headers;
}
