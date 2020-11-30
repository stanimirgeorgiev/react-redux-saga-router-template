import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';
import { ActionTypes } from '../constants/action-types';
import { getUsers } from '../api/server-api';
import { usersReceived } from '../actions/user-tasks-actions';

const fetchUsers = function* (action) {
    try {
        yield delay(2000);
        const users = yield call(getUsers);
        console.log('Fetching all users ...');
        yield put(usersReceived(users.data));
    } catch (requestError) {
        console.log('Something went terribly wrong ...');
    }
};

export function* fetchUsersData() {
    yield takeEvery(ActionTypes.FETCH_USERS_SAGA, fetchUsers);
}
