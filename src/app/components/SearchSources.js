import React from 'react';

export default class SearchSources extends React.Component {
  render() {
    return (
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search sources..." />
        </div>
      </form>
    );
  }
}