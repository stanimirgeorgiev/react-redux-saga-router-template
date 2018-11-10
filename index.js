import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { helloSaga } from './app/sagas/hello-saga';
import { app } from './app/reducers/app';

const reducers = app;
const sagas = [ helloSaga ];
const sagaMiddleware = createSagaMiddleware(sagas);
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

const appDomId = 'root';
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
  <Provider store={store}>
    <div>
			'Start'
    </div>
  </Provider>
);

render(reactComponent, rootContainer);


