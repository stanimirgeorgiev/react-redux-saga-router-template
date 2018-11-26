import {todos} from '../utils/mocked-data';

const initialTasksState = {
  tasksData: todos
};

const tasks = (state = initialTasksState, action) => {
  return state;
}

export default tasks;