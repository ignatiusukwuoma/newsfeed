import React from 'react';
import Source from './Source';

export default class SearchSources extends React.Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 10)});
  }

  render() {
    let filteredSources = this.props.sources.filter((source) => {
      return source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;  
    });
    
    let filteredList = filteredSources.map((source) => {
      return <Source key={source.id} source={source} headlines={this.props.headlines} />;
    });
    
    console.log('filteredList', filteredList);
    return (
      <div>
        <form class="navbar-form navbar-right"> 
          <div class="form-group">
            <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this) } placeholder="Search sources..." />
          </div>
        </form>
        <div class="searched-sources">
          <ul>
            { this.state.search.length > 0 ? filteredList.slice(0, 5): [] } 
          </ul>
        </div>
      </div>
    );
  }
}