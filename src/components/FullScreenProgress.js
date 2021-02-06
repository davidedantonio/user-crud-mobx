import React from 'react';
import {CircularProgress, withStyles} from "@material-ui/core";
import FullScreenTheme from '../styles/FullScreenLoader';

class FullScreenProgress extends React.Component {
  render () {
    const { visible, classes } = this.props;

    return (
      <React.Fragment>
        { visible ? (
          <div className={classes.fullScreen}>
            <CircularProgress />
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}

export default withStyles(FullScreenTheme)(FullScreenProgress);