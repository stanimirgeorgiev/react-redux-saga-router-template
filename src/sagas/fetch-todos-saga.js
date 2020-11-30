import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

import { ActionTypes } from '../constants/action-types';
import { getTodos } from '../api/server-api';
import { todosReceived } from '../actions/tasks-actions';

const fetchUsers = function* (action) {
    try {
        yield delay(6000);
        const todos = yield call(getTodos);
        console.log('Fetching all todos ...');
        yield put(todosReceived(todos.data));
    } catch (requestError) {
        console.log('Something went terribly wrong ...');
    }
};

export function* fetchTodosData() {
    yield takeEvery(ActionTypes.FETCH_TODOS_SAGA, fetchUsers);
}
