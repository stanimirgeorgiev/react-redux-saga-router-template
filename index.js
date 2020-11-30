"use-strict";
import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { App } from "./app/app";

import rootSagas from "./app/sagas/root-saga";
import { app } from "./app/reducers/app";

import "./css/styles.css";

const reducers = app;
const sagaMiddleware = createSagaMiddleware(rootSagas);
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const createRootSaga = function* (sagas) {
  for (let i = 0; i < sagas.length; i++) {
    const saga = sagas[i];
    yield fork(saga);
  }
};

const appDomId = "root";
const rootContainer = document.getElementById(appDomId);
const reactComponent = <App />;

sagaMiddleware.run(createRootSaga, rootSagas);

render(reactComponent, rootContainer);
