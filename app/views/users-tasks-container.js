import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {openUserSection, closeUserSection} from '../actions/user-tasks-actions';

import UsersTasks from './users-tasks';

export const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
    todos: state.tasks.tasksData,
    isOpened: state.users.isOpened
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openUserSection,
    closeUserSection
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTasks);
