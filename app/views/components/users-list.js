import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const UsersLists = (props) => {
  const {onUserClick, selectedUserId, userData, classes} = props;

  const onUsersListItemClick = (item) => {
    return () => onUserClick(item);
  };

  return userData.map((item, index) => {
    return (
      <div key={index} onClick={onUsersListItemClick(item)}>
        <ListItem button selected={selectedUserId === item.id}>
          <ListItemIcon>
            <Avatar className={classes.avatar}>{item.name[0].toUpperCase()}</Avatar>
          </ListItemIcon>
          <ListItemText primary={item.name} inset/>
        </ListItem>
      </div>
    );
  });
}

export default UsersLists;