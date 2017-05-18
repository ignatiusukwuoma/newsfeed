import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Error from './components/Error';
import './components/Layout.scss';

/**
 * Renders the application and creates a router
 */
ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/error" component={Error}></Route>
    </Router>
  </MuiThemeProvider>,
document.getElementById('app'));

