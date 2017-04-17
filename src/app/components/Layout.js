import React from 'react';
import { Link } from 'react-router';
import Nav from './layouts/Nav';
import Sidebar from './layouts/Sidebar';
import Home from './Home';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        <div class="container-fluid">
          <div class="row">
            <Sidebar />
            <div class="col-md-9">
              <h1>News</h1>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
