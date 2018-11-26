'use-strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects'

import CssBaseline from '@material-ui/core/CssBaseline';

import rootSagas from './app/sagas/root-saga';
import { app } from './app/reducers/app';

import UsersTasks from './app/views/users-tasks';
import './css/styles.css';

const reducers = app;
const sagaMiddleware = createSagaMiddleware(rootSagas);
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

const createRootSaga = function* (sagas) {
  for (let i = 0; i < sagas.length; i++) {
    const saga = sagas[i];
    yield fork(saga);
  }
}

const appDomId = 'root';
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
