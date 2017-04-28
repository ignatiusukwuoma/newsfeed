import React from 'react';
import { Link } from 'react-router';
import Nav from './layouts/Nav';
import Home from './Home';
import Newstore from '../stores/Newstore';
import * as NewsActions from '../actions/NewsActions';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.getAll = this.getAll.bind(this);
    this.state = {
      name: '',
      sort: [],
      id: '',
      news: [],
      sources: [],
      sortedNews: [],
      sortLookout: false,
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
      sortLookout: true,
    });
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav sources={this.state.sources} headlines={this.displayHeadlines.bind(this)} location={location} />
        <div class="container-fluid">
          <Home {...this.state} headlines={this.displayHeadlines.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Layout;
