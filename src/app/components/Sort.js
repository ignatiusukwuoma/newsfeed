import React from 'react';
import {  Link } from 'react-router';

export default class Sort extends React.Component {
  
  render() {
    const { sort } = this.props;
    return (
      <li>
        {sort}
      </li>
    );
  }
}