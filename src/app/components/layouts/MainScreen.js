import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import Sort from '../Sort';
import * as NewsActions from '../../actions/NewsActions';

/**
 * Class to display all the Articles
 * @class MainScreen
 * @extends {React.Component}
 * @returns {MainScreen} the major part of the screen
 */
export default class MainScreen extends React.Component {

  /**
   * Props are the state from Layout Component
   * @param {any} props is the state of Layout
   * @memberOf MainScreen
   */
  constructor(props) {
    super(props);
    this.getWithSort = this.getWithSort.bind(this);
    this.state = {
      defaultSort: 'sortby',
      sortNow: '',
    };
  }

  /**
   * Makes an API call with the value of the select tag
   * @param {object} event contains the value selected in the select tag
   * @memberOf MainScreen
   * @returns {function} call to a function in the Newsactions
   */
  getWithSort(event) {
    if (event.target.value !== 'sortby') {
      NewsActions.getWithSort(this.props.id, event.target.value);
      this.setState({ sortNow: event.target.value });
    }
  }

  /**
   * Renders the major part of the view
   * @memberOf MainScreen
   * @returns {View} The MainScreen
   */
  render() {
    const { news, sortBy, name, sortParameters, sortedNews, grid } = this.props;
    const sortComponent = sortParameters.map((sort, i) =>
    (<Sort sort={sort} key={i} />));
    const displayedNews = news.length > 1 ? news : sortedNews;
    const articleComponent = displayedNews.map((article, i) =>
    (<Article key={i} article={article} />));

    return (
      <div class={grid}>
        <div class="main-headers">
          <h2>{name} - { sortBy || this.state.sortNow } News</h2>
          <select class="styled-select" onChange={this.getWithSort}
          value={this.state.defaultSort}>
            <option value="sortby">Sort By</option>
            {sortComponent}
          </select>
        </div>
        <div class="row">
          {articleComponent}
        </div>
      </div>
    );
  }
}

MainScreen.propTypes = {
  news: PropTypes.array,
  sortBy: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  sortParameters: PropTypes.array,
  sortedNews: PropTypes.array,
  headlines: PropTypes.func,
  grid: PropTypes.string,
};
