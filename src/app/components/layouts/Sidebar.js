import React from "react";
import Home from '../Home';
import Source from '../Source';
import * as NewsActions from '../../actions/NewsActions';

export default class Sidebar extends React.Component {
  displayHeadlines(id, sort='top') {
    NewsActions.displayNews(id, sort);
  }
  render() {
    const { sources } = this.props;
    const sourceComponent = sources.map((source, i) => {
      if (source.category === 'entertainment') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    return (
      <div class="col-sm-3 sidebar-main">
        <ul>
          {sourceComponent}
        </ul>
      </div>
    );
  }
}
