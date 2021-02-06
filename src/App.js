import React from 'react';
import {
  Container
} from "@material-ui/core";
import UserTable from './components/UserTable';
import CustomAppBar from "./components/CustomAppBar";
import {inject, observer} from "mobx-react";
import FullScreenProgress from "./components/FullScreenProgress";
import UserModal from "./components/UserModal";

@inject('userStore')
@observer
class App extends React.Component {
  render () {
    const { loading } = this.props.userStore

    return (
      <React.Fragment>
        <CustomAppBar />

        <Container maxWidth="lg">
          <FullScreenProgress visible={loading} />
          <UserModal />
          <UserTable />
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
