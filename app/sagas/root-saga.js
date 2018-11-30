import {fetchUsersData} from './fetch-users-saga';
import {fetchTodosData} from './fetch-todos-saga';

export default [
  fetchUsersData,
  fetchTodosData
]