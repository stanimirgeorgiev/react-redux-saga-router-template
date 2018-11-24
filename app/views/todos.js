import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Refresh from '@material-ui/icons/Refresh';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';

import CompleteFailedTasks from './complete-failed-tasks';
import UsersList from './users-list';
import SimpleBarChart from './simple-bar-chart';
import SimpleTable from './simple-table';
import { styles } from './todos-styles';
import {todos, userData} from '../utils/mocked-data';

class Dashboard extends React.Component {
  state = {
    open: true,
    selectedUserId: null,
    todos,
    userData
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit" className={classes.button} aria-label="Refresh" onClick={() => window.location.href = 'http://localhost:3000'}>
              <Refresh />
            </IconButton>
            <IconButton color="inherit" className={classes.button} aria-label="Refresh" onClick={() => this.setState({selectedUserId: null, userData})}>
              <SupervisorAccount />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <UsersList
              onUserClick={this.onUserClick}
              selectedUserId={this.state.selectedUserId}
              userData={this.state.userData}
              classes={classes}
            />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            {this.state.selectedUserId ? 'Statistics' : 'Personal tasks results'}
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleBarChart selectedUserId={this.state.selectedUserId} that={this} />
          </Typography>
          <Typography variant="h4" gutterBottom component="h2">
            {this.state.selectedUserId ? 'Tasks' : 'Users'}
          </Typography>
          <div className={classes.tableContainer}>
            <SimpleTable selectedUserId={this.state.selectedUserId} open={this.state.open} state={this.state}/>
          </div>
        </main>
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

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
