import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './layouts/Sidebar';
import MainScreen from './layouts/MainScreen';

/**
 * Displays the entire screen asides Nav and Footer
 * @extends React.Component
 */
class Home extends React.Component {

  /**
   * Births the Sidebar and MainScreen sections
   * @param {any} The entire state of Layout
   * @returns {View} Two sections of the screen as components
   * @memberOf Home
   */
  render() {
    return (
      <div class="row">
        <Sidebar sources={this.props.sources}
        headlines={this.props.headlines}
        open={this.props.open} sourcesToggle={this.props.sourcesToggle}/>
        <MainScreen {...this.props} />
      </div>
    );
  }
}
export default Home;
Home.propTypes = {
  headlines: PropTypes.func,
  sourcesToggle: PropTypes.func,
  name: PropTypes.string,
  sortParameters: PropTypes.array,
  id: PropTypes.string,
  sortBy: PropTypes.string,
  news: PropTypes.array,
  sortedNews: PropTypes.array,
  sources: PropTypes.array,
  user: PropTypes.object,
  grid: PropTypes.string,
  open: PropTypes.bool,
};
