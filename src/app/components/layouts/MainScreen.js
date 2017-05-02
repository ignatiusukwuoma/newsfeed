import React from 'react';
import Home from '../Home';
import Article from '../Article';
import Sort from '../Sort';
import * as NewsActions from '../../actions/NewsActions';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getWithSort = this.getWithSort.bind(this);
    this.state = {
      defaultSort: 'sortby',
      sortNow: '',
    };
  }

  getWithSort(event) {
    if (event.target.value === 'top' || event.target.value === 'latest' || event.target.value === 'popular') {
      NewsActions.getWithSort(this.props.id, event.target.value);
      this.setState({ sortNow: event.target.value });
    }
  }

  render() {
    const { news, sortBy, id, name, sortArr, sortedNews } = this.props;
    const sortComponent = sortArr.map((sort, i) => (<Sort sort={sort} key={i} />));
    const articleComponent = news.map((article, i) => (<Article key={i} article={article} />));
    const sortedNewsComponent = sortedNews.map((article, i) =>
    (<Article key={i} article={article} />));

    return (
      <div class="col-sm-10 mainscreen-main">
        <div class="main-headers">
          <h2>{name} - { sortBy || this.state.sortNow } News</h2>
          <select class="styled-select" onChange={this.getWithSort} value={this.state.defaultSort}>
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
