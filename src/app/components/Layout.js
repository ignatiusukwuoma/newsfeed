import React from 'react';
import Logic from './Logic';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    const myName = 'Ignatius';
    return (
      <div>
        <h1>O My Goodness!<span>{myName}</span></h1>
        <Logic />
      </div>
    );
  }
}

export default Layout;
