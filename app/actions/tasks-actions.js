import {ActionTypes} from '../constants/action-tipes';

const completeUserTask = (indexOfTask) => {
  return {
    type: ActionTypes.COMPLETE_USER_TASK,
    payload: {indexOfTask}
  }
};

export {
  completeUserTask,
}
