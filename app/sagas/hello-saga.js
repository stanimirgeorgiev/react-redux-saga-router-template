import { takeEvery } from 'redux-saga/effects'

const fetchUsers = function* (action) {
  console.log('Fetching all users ...');
}

export function* fetchData() {
  yield takeEvery('FETCH_USERS', fetchUsers)
}