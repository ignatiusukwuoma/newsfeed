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
      name: '',
      sort: [],
      id: '',
      news: [],
      sources: [],
      sortedNews: [],
    };
  }

  componentDidMount() {
    Newstore.on('change', this.getAll);
  }

  displayHeadlines(id, sort, name) {
    NewsActions.displayNews(id, sort, name);
  }

  getAll() {
    this.setState({
      news: Newstore.getNews().news,
      sortedNews: Newstore.getSortedNews(),
      id: Newstore.getNews().id,
      sort: Newstore.getNews().sort,
      name: Newstore.getNews().name,
      sources: Newstore.getSources(),
    });
  }

  // getNews() {
  //   this.setState({
  //     news: Newstore.getNews().news,
  //     id: Newstore.getNews().id,
  //     name: Newstore.getNews().name,
  //   });
  // }
  
  render() {
    return (
      <div class="row">
        <Sidebar sources={this.state.sources} headlines={this.displayHeadlines.bind(this)}/>
        <MainScreen news={this.state.news} sortedNews={this.state.sortedNews} id={this.state.id} sort={this.state.sort} name={this.state.name} headlines={this.displayHeadlines.bind(this)}/>
      </div>
    );
  }
}
export default Home;
