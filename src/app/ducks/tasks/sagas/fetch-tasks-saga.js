import { takeEvery, call, put, delay } from 'redux-saga/effects';

import { ActionTypes } from '../constants/action-types';
import { getTasks } from '../api/server-api';
import { tasksReceived } from '../actions/tasks-actions';

const simulateLongFetchTimeout = 1500;
const fetchTasks = function* (action) {
  try {
    // eslint-disable-next-line no-console
    console.log('Fetching all tasks ...');
    yield delay(simulateLongFetchTimeout);
    const tasks = yield call(getTasks);
    yield put(tasksReceived(tasks.data));
  } catch (requestError) {
    // eslint-disable-next-line no-console
    console.log('Something went terribly wrong ...');
  }
};

export function* fetchTasksData() {
  yield takeEvery(ActionTypes.FETCH_TASKS_SAGA, fetchTasks);
}
