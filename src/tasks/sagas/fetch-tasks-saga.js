import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

import { ActionTypes } from '../constants/action-types';
import { getTasks } from '../api/server-api';
import { tasksReceived } from '../actions/tasks-actions';

const fetchTasks = function* (action) {
    try {
        console.log('Fetching all tasks ...');
        yield delay(1500);
        const tasks = yield call(getTasks);
        yield put(tasksReceived(tasks.data));
    } catch (requestError) {
        console.log('Something went terribly wrong ...');
    }
};

export function* fetchTasksData() {
    yield takeEvery(ActionTypes.FETCH_TASKS_SAGA, fetchTasks);
}
