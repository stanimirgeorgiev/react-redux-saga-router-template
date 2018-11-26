import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import NavBar from './components/nav-bar';
import UsersSection from './components/users-section';
import Dashboard from './components/dashboard';
import CompleteFailedTasks from './components/complete-failed-tasks';

import { styles } from './user-tasks-styles';

class UsersTasks extends React.Component {
  state = {
    open: true,
    selectedUserId: null,
    todos: this.props.todos,
    userData: this.props.userData
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  completeTask = (id) => {
    const indexOfTask = this.state.todos.findIndex((task) => task.id === id);
    this.state.todos[indexOfTask].completed = !this.state.todos[indexOfTask].completed;
    this.setState({
      todos: this.state.todos
    })
  }

  onUserClick = (item) => {
    this.setState(() => {
      return {selectedUserId: item.id}
    });
  };

  changeUserIdAndData = (selectedUserId, userData = this.props.userData) => () => this.setState({selectedUserId, userData})

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          handleDrawerOpen={this.handleDrawerOpen}
          classes={classes}
          changeUserIdAndData={this.changeUserIdAndData}
          isOpened={this.state.open}
          userData={this.state.userData}
        />
        <UsersSection
          handleDrawerClose={this.handleDrawerClose}
          classes={classes}
          onUserClick={this.onUserClick}
          isOpened={this.state.open}
          selectedUserId={this.state.selectedUserId}
          userData={this.state.userData}
        />
        <Dashboard
          classes={classes}
          {...this.state}
        />
        <CompleteFailedTasks
          todos={this.state.todos}
          selectedUserId={this.state.selectedUserId}
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
