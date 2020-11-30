import { combineReducers } from 'redux';
import { Tasks } from './tasks';

export const rootSagas = [...Tasks.saga];
export const rootReducer = combineReducers({ tasks: Tasks.reducer });
