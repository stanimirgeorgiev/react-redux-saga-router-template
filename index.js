'use-strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects'

import rootSagas from './app/sagas/root-saga';
import { app } from './app/reducers/app';

import Todos from './app/views/todos';

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
    <div>
	    <Todos />
    </div>
  </Provider>
);

sagaMiddleware.run(createRootSaga, rootSagas);

render(reactComponent, rootContainer);
