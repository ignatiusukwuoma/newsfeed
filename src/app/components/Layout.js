import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>News</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
