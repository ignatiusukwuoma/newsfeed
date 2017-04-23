import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/layouts/Sidebar.js';
import MainScreen from './components/layouts/MainScreen.js';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}> 
      <IndexRoute component={Sidebar} />
      <Route path="news" name="news" component={MainScreen} />
    </Route>
  </Router>,
document.getElementById("app"));

