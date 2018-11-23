import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {userData} from '../utils/mocked-data';

export const mainListItems = (classes, that) => {
  const onUserClick = (that, item) => () => {
    that.setState(() => {
      return {selectedUserId: item.id}
    });
  };

  return userData.map((item, index) => {
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
