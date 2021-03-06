import React from 'react';
import { Route } from 'react-router-dom';

import { TasksList } from './views/tasks-list';
import { fetchTasksData } from './sagas/fetch-tasks-saga';
import { tasks } from './reducers/tasks-reducer';
import { tasksActions } from './actions/tasks-actions';
import { tasksListRoute } from './constants/routes';
export { TASKS_ID } from './constants/common';

export default {
  component: TasksList,
  sagas: [fetchTasksData],
  reducer: tasks,
  actions: tasksActions,
  path: tasksListRoute,
  route: () => (
    <Route exact path={tasksListRoute}>
      <TasksList />
    </Route>
  ),
};
