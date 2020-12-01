import { combineReducers } from 'redux';
import * as bundle from '../app-loader';

const appModuleNames = Object.keys(bundle);

let appReducers = {};
let appActions = {};
let appSagas = [];
const appComponents = [];

appModuleNames.forEach(moduleName => {
    const appModule = bundle[moduleName];
    const { reducer, sagas, actions, component } = appModule.default;
    appReducers = { ...appReducers, [moduleName]: reducer };
    appActions = { ...appActions, [moduleName]: actions };
    appSagas = [...appSagas, ...sagas];
    appComponents.push(component);
});

export const rootReducers = combineReducers(appReducers);
export const rootSagas = appSagas;
export const rootActions = appActions;
export const rootComponents = appComponents;
