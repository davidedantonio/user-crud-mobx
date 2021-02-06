import React from "react";
import {AppBar, Toolbar, Typography, withStyles, Button} from "@material-ui/core";
import AppBarStyle from './../styles/AppBar'
import {inject} from "mobx-react";

@inject('userStore')
class CustomAppBar extends React.Component {
  render () {
    const { classes, userStore } = this.props;

    return (
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            Users
          </Typography>
          <Button variant="outlined" color={'inherit'} onClick={() => userStore.openCreate()}>Add User</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(AppBarStyle)(CustomAppBar);

