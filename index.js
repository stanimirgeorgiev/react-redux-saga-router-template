'use-strict';
import React from 'react';
import { render } from 'react-dom';
import { App } from './src/app';

import { startSagaMiddleware } from './src/config/root-sagas';
import { RootProvider } from './src/config/root-store';

import './css/styles.css';

const appDomId = 'root';
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
    <RootProvider>
        <App />
    </RootProvider>
);

startSagaMiddleware();

render(reactComponent, rootContainer);
