import React from 'react';
import Newstore from '../stores/Newstore';
import Sidebar from './layouts/Sidebar';
import MainScreen from './layouts/MainScreen';
import * as NewsActions from '../actions/NewsActions';

class Home extends React.Component {
  constructor() {
    super();
    this.getAll = this.getAll.bind(this);
    this.state = {
      news: Newstore.getNews(),
      sources: Newstore.getSources(),
    };
  }

  componentWillReceiveProps() {
    Newstore.on('change', this.getAll);
  }

  componentWillUnMount() {
    Newstore.removeListener('change', this.getAll);
  }

  getAll() {
    this.setState({
      news: Newstore.getNews(),
      sources: Newstore.getSources(),
    });
  }
  
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <Sidebar sources={this.state.sources}/>
          <MainScreen news={this.state.news}/>
        </div>
      </div>
    );
  }
}
export default Home;
