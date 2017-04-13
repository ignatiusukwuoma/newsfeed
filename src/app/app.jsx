import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Request from 'superagent';
import Layout from './components/Layout';
import Logic from './components/Logic';
import Button from './components/Button';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1> From App.jsx File </h1>
        <Layout />
      </div>
    );
  }
}
export default App;

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Layout} />
      <Route path="logic" component={Logic} />
      <Route path="button" component={Button} />
    </Route>
  </Router>,
app);

