'use-strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects'

import rootSagas from "./app/sagas/root-saga";
import { app } from "./app/reducers/app";

import rootSagas from './app/sagas/root-saga';
import appReducer from './app/reducers/app';

import UsersTasks from './app/views/users-tasks-container';
import './css/styles.css';

const reducers = appReducer;
const sagaMiddleware = createSagaMiddleware(rootSagas);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const createRootSaga = function* (sagas) {
  for (let i = 0; i < sagas.length; i++) {
    const saga = sagas[i];
    yield fork(saga);
  }
};

const appDomId = "root";
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <UsersTasks />
    </React.Fragment>
  </Provider>
);

sagaMiddleware.run(createRootSaga, rootSagas);

render(reactComponent, rootContainer);
