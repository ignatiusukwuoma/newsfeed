import React from "react";
import Home from '../Home';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div class="col-md-3 sidebar-main">
        <Home />
      </div>
    );
  }
}
