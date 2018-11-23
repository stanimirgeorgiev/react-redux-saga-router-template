import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';

export const mainListItems = (classes, that) => {
  const onUserClick = (that, item) => () => {
    that.setState(() => {
      return {selectedUserId: item.id}
    });
  };

  return that.state.userData.map((item, index) => {
    return (
      <div key={index} onClick={onUserClick(that, item)}>
        <ListItem button selected={that.state.selectedUserId === item.id}>
          <ListItemIcon>
            <Avatar className={classes.avatar}>{item.name[0].toUpperCase()}</Avatar>
          </ListItemIcon>
          <ListItemText primary={item.name} inset/>
        </ListItem>
      </div>
    );
  });
}

export const failedTasks = (classes, that) => {
  const userTasks = that.state.todos.filter((todo) => todo.userId === that.state.selectedUserId)

  const userElements = userTasks.map((item, index) => {
    if (item.completed) {
      return null;
    } else {
      return (
        <ListItem key={index} selected={null}>
          <Switch
            checked={item.completed}
            onChange={that.completeTask.bind(null, item.id)}
            aria-label="Complete the task"
          />
          <ListItemText primary={item.title} inset />
        </ListItem>
      );
    }
  }).filter((item) => item);
  return userElements;
}
