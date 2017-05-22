import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Error from './components/Error.jsx';
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
      <Route path="/login" component={Login} />
      <Route path="/error" component={Error} />
    </Router>
  </MuiThemeProvider>,
document.getElementById('app'));

