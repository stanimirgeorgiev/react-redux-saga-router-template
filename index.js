'use-strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { App } from './src/app';

import rootSagas from './src/sagas/root-saga';
import appReducer from './src/reducers/app';

import './css/styles.css';

const reducers = appReducer;
const sagaMiddleware = createSagaMiddleware(rootSagas);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

const createRootSaga = function* (sagas) {
    for (let i = 0; i < sagas.length; i++) {
        const saga = sagas[i];
        yield fork(saga);
    }
};

const appDomId = 'root';
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
    <Provider store={store}>
        <App />;
    </Provider>
);

sagaMiddleware.run(createRootSaga, rootSagas);

render(reactComponent, rootContainer);
