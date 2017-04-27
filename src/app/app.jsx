import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from './components/Login';
import NotFound from './components/NotFound';

import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/layouts/Sidebar.js';
import MainScreen from './components/layouts/MainScreen.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
document.getElementById("app"));

