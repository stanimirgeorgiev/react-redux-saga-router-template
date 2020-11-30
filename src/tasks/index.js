import { TasksList } from './views/tasks-list';
import { fetchTasksData } from './sagas/fetch-tasks-saga';

import tasks from './reducers/tasks-reducer';
import { tasksActions } from './actions/tasks-actions';

export default {
    component: TasksList,
    sagas: [fetchTasksData],
    reducer: tasks,
    actions: tasksActions,
    //route: tasksRoute
};
