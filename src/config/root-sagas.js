import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { rootSagas } from './app-factory';
// import { Tasks } from '../tasks';

export const sagaMiddleware = createSagaMiddleware(rootSagas);

const createRootSaga = function* (sagas) {
    for (let i = 0; i < sagas.length; i++) {
        const saga = sagas[i];
        yield fork(saga);
    }
};

export const startSagaMiddleware = () => {
    sagaMiddleware.run(createRootSaga, rootSagas);
};
