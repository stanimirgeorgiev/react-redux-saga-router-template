'use-strict';
import React from 'react';
import { render } from 'react-dom';
import { App } from './app/app';

import { startSagaMiddleware } from './config/root-sagas';
import { RootProvider } from './config/root-store';

import './index.css';

const appDomId = 'root';
const rootContainer = document.getElementById(appDomId);
const reactComponent = (
    <RootProvider>
        <App />
    </RootProvider>
);

startSagaMiddleware();

render(reactComponent, rootContainer);
