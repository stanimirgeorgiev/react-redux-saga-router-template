import { ActionTypes } from '../constants/action-types';

const completeUserTask = indexOfTask => {
    return {
        type: ActionTypes.COMPLETE_USER_TASK,
        payload: { indexOfTask },
    };
};

const todosReceived = todos => {
    return {
        type: ActionTypes.TODOS_RECEIVED,
        payload: { tasksData: todos },
    };
};

const fetchTodos = () => {
    return {
        type: ActionTypes.FETCH_TODOS_SAGA,
        payload: {},
    };
};

export { completeUserTask, todosReceived, fetchTodos };
