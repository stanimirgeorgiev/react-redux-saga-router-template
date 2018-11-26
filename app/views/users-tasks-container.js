import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UsersTasks from './users-tasks';

export const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
    todos: state.tasks.tasksData
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTasks);
