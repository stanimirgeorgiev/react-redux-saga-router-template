import { combineReducers } from 'redux';

import tasks from './tasks-reducer';
import users from './users-reducer';

const appReducer = combineReducers({
  users,
  tasks
});

export default appReducer;
