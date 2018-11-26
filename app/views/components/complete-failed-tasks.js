import React from 'react';
import classNames from 'classnames';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const CompleteFailedTasks = (props) => {
  const {todos, selectedUserId, completeTask} = props;

  const userTasks = todos.filter((todo) => todo.userId === selectedUserId)

  const userElements = [];
  userTasks.forEach((item, index) => {
    if (!item.completed) {
      userElements.push((
        <ListItem key={index} selected={null}>
          <Switch
            checked={item.completed}
            onChange={completeTask.bind(null, item.id)}
            aria-label="Complete the task"
          />
          <ListItemText primary={item.title} inset />
        </ListItem>
      ));
    }
  });

  if (userElements.length > 0) {
    return (
      <Drawer
        anchor="right"
        variant="permanent"
        classes={{
          paper: classNames(props.classes.drawerPaper, ''),
        }}
        open={true}
        className={'rightDrawer'}
      >
        <Divider />
        <List>
          {userElements}
        </List>
      </Drawer>
    );
  } else {
    return null;
  }
}

export default CompleteFailedTasks;