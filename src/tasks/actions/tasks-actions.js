import { ActionTypes } from '../constants/action-types';

export const completeUserTask = indexOfTask => {
    return {
        type: ActionTypes.COMPLETE_USER_TASK,
        payload: { indexOfTask },
    };
};

export const tasksReceived = tasks => {
    return {
        type: ActionTypes.TASKS_RECEIVED,
        payload: { tasksData: tasks },
    };
};

export const fetchTasks = () => {
    return {
        type: ActionTypes.FETCH_TASKS_SAGA,
        payload: {},
    };
};
