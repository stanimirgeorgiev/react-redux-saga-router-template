import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Refresh from '@material-ui/icons/Refresh';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';

import { styles } from '../user-tasks-styles';

const NavBar = (props) => {
  const {handleDrawerOpen, classes, changeUserIdAndData, isOpened, userData} = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, isOpened && classes.appBarShift)}
      >
        <Toolbar disableGutters={!isOpened} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(
              classes.menuButton,
              isOpened && classes.menuButtonHidden,
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
          <IconButton
            color="inherit"
            className={classes.button}
            aria-label="Refresh"
            onClick={() => window.location.href = 'http://localhost:3000'}
          >
            <Refresh />
          </IconButton>
          <IconButton color="inherit" className={classes.button} aria-label="Refresh" onClick={changeUserIdAndData(null, userData)}>
            <SupervisorAccount />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
