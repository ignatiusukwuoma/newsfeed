import React from 'react';
import Source from './Source';

export default class SearchSources extends React.Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  updateSearch(event) {
    if (!/\d/.test(event.target.value)) {
      this.setState({ search: event.target.value.substr(0, 10) });
    }
  }

  render() {
    const filteredSources = this.props.sources.filter(source =>
    source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);

    const filteredList = filteredSources.map(source =>
    <Source key={source.id} source={source} headlines={this.props.headlines} />);
    return (
      <div class="nav-form-div">
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" value={this.state.search}
            onChange={this.updateSearch.bind(this) } placeholder="Search sources..." />
          </div>
        </form>
        <div class="searched-sources">
          <ul>
            { this.state.search.length > 0 ? filteredList.slice(0, 5) : [] }
          </ul>
        </div>
      </div>
    );
  }
}
