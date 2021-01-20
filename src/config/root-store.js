'use-strict';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import PropTypes from 'prop-types';
import { routerMiddleware, ConnectedRouter, connectRouter } from 'connected-react-router';

import { rootReducers } from './app-factory';
import { sagaMiddleware } from './root-sagas';
import { history } from '../app/app';

const connectedReducers = history => combineReducers({ ...rootReducers, router: connectRouter(history) });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectedReducers(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

export const RootProvider = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
);

RootProvider.propTypes = {
  children: PropTypes.element,
};
