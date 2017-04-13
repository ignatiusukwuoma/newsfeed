import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Article from './components/Article';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}> 
      <IndexRoute component={Home} />
      <Route path="news(/:story)" name="news" component={Article} />
    </Route>
  </Router>,
document.getElementById("app"));

