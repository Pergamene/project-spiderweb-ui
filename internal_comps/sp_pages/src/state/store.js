import { store } from 'intrastore-thunk/src/store.js';
import { sp_pages } from './reducer.js';

store.addReducers({ sp_pages });

export const localStore = store;