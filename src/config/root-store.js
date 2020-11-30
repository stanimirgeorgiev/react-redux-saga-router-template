'use-strict';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from '../app-loader';
import { sagaMiddleware } from './root-sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const RootProvider = ({ children }) => <Provider store={store}>{children}</Provider>;
