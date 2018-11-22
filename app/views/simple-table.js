import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styles } from './simple-table-styles';
import { getUserData } from '../utils/mocked-data';

function SimpleTable(props) {
  let data = [
    ...getUserData()
  ];

  const { classes, selectedUserId } = props;
  if (selectedUserId) {
    data = [data[selectedUserId - 1]];
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Username</TableCell>
            <TableCell numeric>City</TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.username}</TableCell>
                <TableCell numeric>{n.address.city}</TableCell>
                <TableCell numeric>{n.email}</TableCell>
                <TableCell numeric>{n.phone}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
