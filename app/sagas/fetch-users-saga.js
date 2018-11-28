import { takeEvery, call, put } from 'redux-saga/effects'
import {ActionTypes} from '../constants/action-types';
import {getUsers} from '../api/server-api';
import {usersReceived} from '../actions/user-tasks-actions';

const fetchUsers = function* (action) {
  try {
    const users = yield call(getUsers);
    console.log('Fetching all users ...');
    yield put(usersReceived(users.data));
  } catch(requestError) {
    console.log('Something went terribly wrong ...');
  }
}

export function* fetchData() {
  yield takeEvery(ActionTypes.FETCH_USERS_SAGA, fetchUsers)
}