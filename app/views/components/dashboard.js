import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SimpleBarChart from './simple-bar-chart';
import SimpleTable from './simple-table';

import { styles } from '../user-tasks-styles';

const Dashboard = (props) => {
  const {classes, selectedUserId, userData, todos} = props;

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography variant="h4" gutterBottom component="h2">
        {selectedUserId ? 'Statistics' : 'Personal tasks results'}
      </Typography>
      <Typography component="div" className={classes.chartContainer}>
        <SimpleBarChart selectedUserId={selectedUserId} userData={userData} todos={todos}/>
      </Typography>
      <Typography variant="h4" gutterBottom component="h2">
        {selectedUserId ? 'Tasks' : 'Users'}
      </Typography>
      <div className={classes.tableContainer}>
        <SimpleTable selectedUserId={selectedUserId} userData={userData} todos={todos} taskWasCompleted={props.taskWasCompleted}/>
      </div>
    </main>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
