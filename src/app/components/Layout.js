import React from 'react';
import { Link } from 'react-router';
import Nav from './layouts/Nav';
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
              <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
