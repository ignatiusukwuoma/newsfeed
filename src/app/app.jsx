import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBfetXIUjgUNRY42M3dtdr1ol6-dV6P5RY",
  authDomain: "newsfeed-165004.firebaseapp.com",
  databaseURL: "https://newsfeed-165004.firebaseio.com",
  projectId: "newsfeed-165004",
  storageBucket: "newsfeed-165004.appspot.com",
  messagingSenderId: "315341524768"
};
firebase.initializeApp(config);

import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/layouts/Sidebar.js';
import MainScreen from './components/layouts/MainScreen.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}> 
      <IndexRoute component={Home} />
      <Route path="news" component={MainScreen} />
    </Route>
  </Router>,
document.getElementById("app"));

