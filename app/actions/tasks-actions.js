import {ActionTypes} from '../constants/action-types';

const completeUserTask = (indexOfTask) => {
  return {
    type: ActionTypes.COMPLETE_USER_TASK,
    payload: {indexOfTask}
  }
};

export {
  completeUserTask,
}
