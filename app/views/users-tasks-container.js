import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  openUserSection,
  closeUserSection,
  clickOnUser,
  updateSelectedUserAndData,
  fetchUsers,
} from '../actions/user-tasks-actions';
import {completeUserTask, fetchTodos} from '../actions/tasks-actions';

import UsersTasks from './users-tasks';

export const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
    todos: state.tasks.tasksData,
    taskWasCompleted: state.tasks.taskWasCompleted,
    isOpened: state.users.isOpened,
    selectedUserId: state.users.selectedUserId,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openUserSection,
    closeUserSection,
    completeUserTask,
    clickOnUser,
    updateSelectedUserAndData,
    fetchUsers,
    fetchTodos,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTasks);
