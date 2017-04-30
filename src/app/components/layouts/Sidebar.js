import React from "react";
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
  componentDidMount() {
    this.showSources();
    this.props.headlines(this.state.defaultId, this.state.defaultSortBy, this.state.defaultName);
  }

  showSources() {  
    NewsActions.displaySources();
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
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const technologySources = sources.map((source, i) => {
      if (source.category === 'technology') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const sportSources = sources.map((source, i) => {
      if (source.category === 'sport') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const musicSources = sources.map((source, i) => {
      if (source.category === 'music') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const politicsSources = sources.map((source, i) => {
      if (source.category === 'politics') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const generalSources = sources.map((source, i) => {
      if (source.category === 'general') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const gamingSources = sources.map((source, i) => {
      if (source.category === 'gaming') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
      }
    });
    const sciencenatureSources = sources.map((source, i) => {
      if (source.category === 'science-and-nature') {
        return (<Source key={i} source={source} headlines={this.props.headlines} />);
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
