import React from "react";
import Home from '../Home';
import Source from '../Source';
import * as NewsActions from '../../actions/NewsActions';

export default class Sidebar extends React.Component {
  componentDidMount() {
    this.showSources();
  }

  showSources() {  
    NewsActions.displaySources();
  }

  displayHeadlines(id, sort='top') {
    NewsActions.displayNews(id, sort);
  }

  render() {
    const { sources } = this.props;
    const entertainmentSources = sources.map((source, i) => {
      if (source.category === 'entertainment') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const businessSources = sources.map((source, i) => {
      if (source.category === 'business') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    return (
      <div class="col-sm-2 sidebar-main">
        Entertainment
        <ul>
          {entertainmentSources}
        </ul>
        Business
        <ul>
          {businessSources}
        </ul>
      </div>
    );
  }
}
