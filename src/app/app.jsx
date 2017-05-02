import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import './components/Layout.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/login" component={Login}></Route>
  </Router>,
document.getElementById('app'));

