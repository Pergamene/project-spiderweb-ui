import { store } from 'intrastore-thunk/src/store.js';
import { sp_page } from './reducer.js';

store.addReducers({ sp_page });

export const localStore = store;