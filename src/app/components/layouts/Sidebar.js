import React from 'react';
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

  render() {
    const { sources } = this.props;
    const entertainmentSources = sources.map((source, i) => {
      if (source.category === 'entertainment') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const businessSources = sources.map((source, i) => {
      if (source.category === 'business') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const technologySources = sources.map((source, i) => {
      if (source.category === 'technology') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const sportSources = sources.map((source, i) => {
      if (source.category === 'sport') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const musicSources = sources.map((source, i) => {
      if (source.category === 'music') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const politicsSources = sources.map((source, i) => {
      if (source.category === 'politics') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const generalSources = sources.map((source, i) => {
      if (source.category === 'general') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const gamingSources = sources.map((source, i) => {
      if (source.category === 'gaming') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });
    const sciencenatureSources = sources.map((source, i) => {
      if (source.category === 'science-and-nature') {
        return (<Source key={source.id} source={source} headlines={this.props.headlines} />);
      }
    });

    return (
      <div class="col-sm-2 sidebar-main">
        <h3>News Sources</h3>
        <h4 class="sourceGroup"> Entertainment </h4>
        <ul>
          {entertainmentSources}
        </ul>
        <h4 class="sourceGroup"> Business </h4>
        <ul>
          {businessSources}
        </ul>
        <h4 class="sourceGroup"> Technology </h4>
        <ul>
          {technologySources}
        </ul>
        <h4 class="sourceGroup"> Sport </h4>
        <ul>
          {sportSources}
        </ul>
        <h4 class="sourceGroup"> Music </h4>
        <ul>
          {musicSources}
        </ul>
        <h4 class="sourceGroup"> Politics </h4>
        <ul>
          {politicsSources}
        </ul>
        <h4 class="sourceGroup"> General </h4>
        <ul>
          {generalSources}
        </ul>
        <h4 class="sourceGroup"> Gaming </h4>
        <ul>
          {gamingSources}
        </ul>
        <h4 class="sourceGroup"> Science and Nature </h4>
        <ul>
          {sciencenatureSources}
        </ul>
      </div>
    );
  }
}
