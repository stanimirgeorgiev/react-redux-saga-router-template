import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import UsersList from './users-list';
import { styles } from '../user-tasks-styles';

const UsersSection = (props) => {
  const {handleDrawerClose, classes, onUserClick, isOpened, selectedUserId, userData} = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !isOpened && classes.drawerPaperClose),
        }}
        open={isOpened}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <UsersList
            onUserClick={onUserClick}
            selectedUserId={selectedUserId}
            userData={userData}
            classes={classes}
          />
        </List>
      </Drawer>
    </div>
  );
};

UsersSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersSection);
