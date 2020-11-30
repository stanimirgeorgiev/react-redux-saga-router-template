'use-strict';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { sagaMiddleware } from './root-sagas';

import appReducer from './src/reducers/app';

const reducers = appReducer;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const RootProvider = ({ children }) => <Provider store={store}>{children}</Provider>;
