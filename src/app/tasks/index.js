import React from 'react';
import { Route } from 'react-router-dom';

import { defaultModuleExporter } from '../../config/app-factory';

import { TasksList } from './views/tasks-list';
import { fetchTasksData } from './sagas/fetch-tasks-saga';
import { tasks } from './reducers/tasks-reducer';
import { tasksActions } from './actions/tasks-actions';
import { tasksListRoute } from './constants/routes';

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
