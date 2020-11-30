import { TasksList } from './views/tasks-list';
import { fetchTasksData } from './sagas/fetch-tasks-saga';

import tasks from './reducers/tasks-reducer';

export const Tasks = {
    component: TasksList,
    saga: [fetchTasksData],
    reducer: tasks,
};
