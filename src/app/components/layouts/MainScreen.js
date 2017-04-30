import React from "react";
import Home from '../Home';
import Article from '../Article';
import Sort from '../Sort';
import * as NewsActions from '../../actions/NewsActions';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getWithSort = this.getWithSort.bind(this);
    this.state = {
      sourceName: '',
      sourceId: '',
      sourceSort: [],
    };
  }

  getWithSort(event) {
    if (event.target.value === 'top' || event.target.value === 'latest' ) {
      NewsActions.getWithSort(this.props.id, event.target.value);
    }
  }

  render() {
    const { news, id, name, sort, sortedNews, sortLookout } = this.props;
    // let sort = this.props.sort;
    // sort = (sort instanceof Array) ? sort : [sort];
    const sortComponent = sort.map((sorter, i) => {
      if (sortLookout) {
        return (<Sort sort={sorter} key={i} />);
      }
    });
    const sortedNewsComponent = sortedNews.map((article, i) => {
      return (<Article key={i} article={article} />);
    });
    const articleComponent = news.map((article, i) => {
      return (<Article key={i} article={article} />);
    });
    
    return (
      <div class="col-sm-10 mainscreen-main">
        <div class="main-headers">
        <h2>HeadLines from {name}</h2>
        <select class="styled-select" onChange={this.getWithSort} defaultValue="sortby">
          <option value="sortby">Sort By</option>
          {sortComponent}
        </select>
        </div>
        <div class="row">
          {articleComponent}
          {sortedNewsComponent}
        </div>
      </div>
    );
  }
}
