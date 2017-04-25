import React from 'react';
import { Link } from 'react-router';
import Nav from './layouts/Nav';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        {this.props.children}
      </div>
      
    );
  }
}

export default Layout;
