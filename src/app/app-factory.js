import { combineReducers } from 'redux';

import appModules from './app-loader';

const appModuleNames = Object.keys(appModules);

let appReducers = {};
let appActions = {};
let appSagas = [];
let appPaths = {};
const appComponents = [];
const appRoutes = [];

appModuleNames.forEach(moduleName => {
  const appModule = appModules[moduleName];
  const { reducer = (state = {}) => state, sagas = [], actions, component, route, path } = appModule;
  appReducers = { ...appReducers, [moduleName]: reducer };
  appActions = { ...appActions, [moduleName]: actions };
  appPaths = { ...appPaths, [moduleName]: path };
  appSagas = [...appSagas, ...sagas];
  appComponents.push(component);
  appRoutes.push(route);
});

export const rootReducers = combineReducers(appReducers);
export const rootSagas = appSagas;
export const rootActions = appActions;
export const rootComponents = appComponents;
export const rootRoutes = appRoutes;
export const rootPaths = appPaths;
