import { ActionTypes } from '../constants/action-types';

const initialTasksState = {
    tasksData: [],
    taskWasCompleted: {},
};

export const tasks = (state = initialTasksState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.COMPLETE_USER_TASK: {
            const modifiedState = { ...state.tasksData };
            modifiedState[payload.indexOfTask].completed = !modifiedState[payload.indexOfTask].completed;
            return {
                ...state,
                tasksData: modifiedState,
                taskWasCompleted: { ...state.tasksData[payload.indexOfTask] },
            };
        }
        case ActionTypes.TASKS_RECEIVED: {
            return { ...state, ...payload };
        }
    }

    return state;
};
