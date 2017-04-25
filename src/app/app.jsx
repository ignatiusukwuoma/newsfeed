import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = new createBrowserHistory();
import Login from './components/Login';
import NotFound from './components/NotFound';

import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/layouts/Sidebar.js';
import MainScreen from './components/layouts/MainScreen.js';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="login" component={Login} />
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
document.getElementById("app"));

