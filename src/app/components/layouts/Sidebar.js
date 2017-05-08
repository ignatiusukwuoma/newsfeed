import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from '../Home';
import Source from '../Source';
import * as NewsActions from '../../actions/NewsActions';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultId: 'techcrunch',
      defaultSortBy: ['top', 'latest'],
      defaultName: 'TechCrunch',
    };
  }

  showSources() {
    NewsActions.displaySources();
  }

  componentDidMount() {
    this.showSources();
    this.props.headlines(this.state.defaultId, this.state.defaultSortBy,
    this.state.defaultName);
  }

  getSourcesByCategory() {
    const { sources } = this.props;
    const sourcesByCategory = {};
    sources.forEach((source) => {
      if (sourcesByCategory[source.category] !== undefined) {
        sourcesByCategory[source.category].push(`${source.id}_${source.name}_${source.sortBy}`);
      } else {
        sourcesByCategory[source.category] = [];
        sourcesByCategory[source.category].push(`${source.id}_${source.name}_${source.sortBy}`);
      }
    });
    return sourcesByCategory;
  }

  getView(sourcesByCategory) {
    if (window.innerWidth < 768) {
      return (
          <Drawer open={this.props.open}>
            <h3>News Sources</h3>
            {sourcesByCategory}
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
