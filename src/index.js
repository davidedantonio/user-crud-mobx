import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Provider } from "mobx-react";
import { userStore } from "./store/UserStore";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider
      userStore={userStore}
    >
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
