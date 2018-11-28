import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import NavBar from './components/nav-bar';
import UsersSection from './components/users-section';
import Dashboard from './components/dashboard';
import CompleteFailedTasks from './components/complete-failed-tasks';

import { styles } from './user-tasks-styles';

class UsersTasks extends React.Component {
  completeTask = (id) => {
    const indexOfTask = this.props.todos.findIndex((task) => task.id === id);
    this.props.completeUserTask(indexOfTask)
  }

  onUserClick = (item) => {
    this.props.clickOnUser(item.id);
  };

  changeUserIdAndData = (selectedUserId, userData = this.props.userData) => () => this.props.updateSelectedUserAndData(selectedUserId, userData)

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          handleDrawerOpen={this.props.openUserSection}
          classes={classes}
          changeUserIdAndData={this.changeUserIdAndData}
          isOpened={this.props.isOpened}
          userData={this.props.userData}
        />
        <UsersSection
          handleDrawerClose={this.props.closeUserSection}
          classes={classes}
          onUserClick={this.onUserClick}
          isOpened={this.props.isOpened}
          selectedUserId={this.props.selectedUserId}
          userData={this.props.userData}
        />
        <Dashboard
          classes={classes}
          todos={this.props.todos}
          userData={this.props.userData}
          selectedUserId={this.props.selectedUserId}
        />
        <CompleteFailedTasks
          todos={this.props.todos}
          selectedUserId={this.props.selectedUserId}
          completeTask={this.completeTask}
          classes={classes}
        />
      </div>
    );
  }
}

UsersTasks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersTasks);
