import {todos} from '../utils/mocked-data';
import cloneDeep from 'lodash/cloneDeep';
import {ActionTypes} from '../constants/action-tipes';

const initialTasksState = {
  tasksData: todos
};

const tasks = (state = initialTasksState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.COMPLETE_USER_TASK: {
      const modifiedState = cloneDeep(state.tasksData);
      modifiedState[payload.indexOfTask].completed = !modifiedState[payload.indexOfTask].completed;
      return  {...state, tasksData: modifiedState};
    }
  }

  return state;
}

export default tasks;
