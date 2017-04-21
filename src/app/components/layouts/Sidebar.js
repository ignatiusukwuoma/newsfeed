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
    const technologySources = sources.map((source, i) => {
      if (source.category === 'technology') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const sportSources = sources.map((source, i) => {
      if (source.category === 'sport') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const musicSources = sources.map((source, i) => {
      if (source.category === 'music') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const politicsSources = sources.map((source, i) => {
      if (source.category === 'politics') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const generalSources = sources.map((source, i) => {
      if (source.category === 'general') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const gamingSources = sources.map((source, i) => {
      if (source.category === 'gaming') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    const sciencenatureSources = sources.map((source, i) => {
      if (source.category === 'science-and-nature') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    return (
      <div class="col-sm-2 sidebar-main">
        <h4>News Sources</h4>
        <h5 class="sourceGroup"> Entertainment </h5>
        <ul>
          {entertainmentSources}
        </ul>
        <h5 class="sourceGroup"> Business </h5>
        <ul>
          {businessSources}
        </ul>
        <h5 class="sourceGroup"> Technology </h5>
        <ul>
          {technologySources}
        </ul>
        <h5 class="sourceGroup"> Sport </h5>
        <ul>
          {sportSources}
        </ul>
        <h5 class="sourceGroup"> Music </h5>
        <ul>
          {musicSources}
        </ul>
        <h5 class="sourceGroup"> Politics </h5>
        <ul>
          {politicsSources}
        </ul>
        <h5 class="sourceGroup"> General </h5>
        <ul>
          {generalSources}
        </ul>
        <h5 class="sourceGroup"> Gaming </h5>
        <ul>
          {gamingSources}
        </ul>
        <h5 class="sourceGroup"> Science and Nature </h5>
        <ul>
          {sciencenatureSources}
        </ul>
      </div>
    );
  }
}
