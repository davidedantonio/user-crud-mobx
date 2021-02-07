import React from 'react';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody, IconButton
} from "@material-ui/core";
import {inject, observer} from "mobx-react";
import {Edit} from "@material-ui/icons";

@inject('userStore')
@observer
class UserTable extends React.Component {
  async componentDidMount() {
    const { userStore } = this.props;
    try {
      await userStore.listUser();
    } catch (e) {}
  }

  render () {
    const { userStore } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Married</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userStore.users.map(user => {
              return (
                <TableRow key={user.id}>
                  <TableCell>
                    <IconButton onClick={() => userStore.getUserAndEdit(user)}><Edit /></IconButton></TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.surname}</TableCell>
                  <TableCell>{user.job}</TableCell>
                  <TableCell>{user.birthDate}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.married}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>    
      </TableContainer>
    )
  }
}

export default UserTable;