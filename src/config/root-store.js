'use-strict';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducers } from './app-factory';
import { sagaMiddleware } from './root-sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const RootProvider = ({ children }) => <Provider store={store}>{children}</Provider>;
