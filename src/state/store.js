import { store } from 'intrastore-thunk/src/store.js';
import root from './reducer.js';

store.addReducers({ root });

export const localStore = store;