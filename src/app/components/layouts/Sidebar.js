import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from '../Home';
import Source from '../Source';
import * as NewsActions from '../../actions/NewsActions';

/**
 * Creates the sidebar to display the list of News sources
 * @class Sidebar
 * @extends {React.Component}
 */
export default class Sidebar extends React.Component {

  /**
   * Creates an instance of Sidebar.
   * @param {any} Mainly an array of News sources
   * @memberOf Sidebar
   */
  constructor(props) {
    super(props);
    this.state = {
      defaultId: 'techcrunch',
      defaultSortBy: ['top', 'latest'],
      defaultName: 'TechCrunch',
    };
  }

  /**
   * Calls the actions to make an API call for sources
   * @memberOf Sidebar
   */
  showSources() {
    NewsActions.displaySources();
  }

  componentDidMount() {
    this.showSources();
    this.props.headlines(this.state.defaultId, this.state.defaultSortBy,
    this.state.defaultName);
  }

  /**
   * Arranges the news sources in categories
   * @param {array} An array of source objects
   * @returns {object} News sources arranged in categories
   * @memberOf Sidebar
   */
  getSourcesByCategory() {
    const { sources } = this.props;
    const sourcesByCategory = {};
    sources.forEach((source) => {
      if (sourcesByCategory[source.category] !== undefined) {
        sourcesByCategory[source.category]
          .push(`${source.id}_${source.name}_${source.sortBy}`);
      } else {
        sourcesByCategory[source.category] = [];
        sourcesByCategory[source.category]
          .push(`${source.id}_${source.name}_${source.sortBy}`);
      }
    });
    return sourcesByCategory;
  }

  /**
   * Selects the type of view to display-mobile or desktop
   * @param {object} sourcesByCategory - source names arranged in categories
   * @returns a mobile or desktop display
   * @memberOf Sidebar
   */
  getView(sourcesByCategory) {
    if (screen.width < 768) {
      return (
          <Drawer open={this.props.open} width="60%">
            <div class="drawer">
              <h3>News Sources</h3>
              {sourcesByCategory}
            </div>
          </Drawer>
      );
    }
    return (
      <div class="col-sm-2 sidebar-main">
        <h3>News Sources</h3>
        {sourcesByCategory}
      </div>
    );
  }

  /**
   * Maps through the sources arranged in categories
   * @returns the news sources in a sidebar
   * @memberOf Sidebar
   */
  render() {
    const sources = this.getSourcesByCategory();
    const categories = Object.keys(sources);
    const sourcesByCategory = categories.map((category) => {
      const sourcesList = sources[category].map((source) => {
        const sourceSplit = source.split('_');
        const sourceDetails = {};
        for (let i = 0; i < sourceSplit.length - 1; i += 1) {
          sourceDetails.id = sourceSplit[0];
          sourceDetails.name = sourceSplit[1];
          sourceDetails.sortBy = sourceSplit[2].split(',');
        }
        return (<Source key={sourceDetails.id}
        source={sourceDetails} headlines={this.props.headlines}
        sourcesToggle={this.props.sourcesToggle} open={this.props.open} />);
      });
      return (
        <div key={category}>
          <h4 class="sourceGroup"> {category} </h4>
          <ul> {sourcesList} </ul>
        </div>
      );
    });

    return this.getView(sourcesByCategory);
  }
}
Sidebar.propTypes = {
  sources: PropTypes.array,
  headlines: PropTypes.func,
};
