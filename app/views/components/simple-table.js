import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

import TablePaginationActionsWrapped from './simple-table-pagination';

import { styles } from './simple-table-styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.userData,
      page: 0,
      rowsPerPage: 5,
    }
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  pagination = () => {
    const {rows, rowsPerPage, page} = this.state;

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActionsWrapped}
          />
        </TableRow>
      </TableFooter>
    );
  };

  renderTasksPerUser = (classes) => {
    const {rows, rowsPerPage, page} = this.state;

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Id</CustomTableCell>
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell>Completed</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(task => {
            return (
              <TableRow key={task.id}>
                <CustomTableCell component="th" scope="row">
                  {task.id}
                </CustomTableCell>
                <CustomTableCell>{task.title}</CustomTableCell>
                <CustomTableCell>{task.completed ? 'Yes' : 'No'}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    )
  };

  renderTUsers = (classes) => {
    const {rows, rowsPerPage, page} = this.state;

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Username</CustomTableCell>
            <CustomTableCell>City</CustomTableCell>
            <CustomTableCell>Email</CustomTableCell>
            <CustomTableCell>Phone</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => {
            if (!user.address) {
              return null;
            }
            return (
              <TableRow key={user.id}>
                <CustomTableCell component="th" scope="row">
                  {user.name}
                </CustomTableCell>
                <CustomTableCell>{user.username}</CustomTableCell>
                <CustomTableCell>{user.address.city}</CustomTableCell>
                <CustomTableCell>{user.email}</CustomTableCell>
                <CustomTableCell>{user.phone}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    )
  };

  componentDidUpdate(pevProps) {
    const {selectedUserId, userData, todos} = this.props;

    if (selectedUserId && selectedUserId !== pevProps.selectedUserId) {
      const rows = todos.filter((todo) => selectedUserId === todo.userId);

      this.setState({
        rows,
        page: 0,
        rowsPerPage: 5
      });
    }

    if (!selectedUserId && selectedUserId !== pevProps.selectedUserId) {
      const rows = userData;

      this.setState({
        rows,
        page: 0,
        rowsPerPage: 5
      });
    }
  }

  render() {
    const {classes, selectedUserId} = this.props
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          {this.pagination()}
        </Table>
        <div className={classes.tableWrapper}>
          {selectedUserId ? this.renderTasksPerUser(classes) : this.renderTUsers(classes)}
        </div>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedUserId: PropTypes.number
};

export default withStyles(styles)(SimpleTable);
