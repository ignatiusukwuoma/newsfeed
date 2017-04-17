import React from 'react';
import {  Link } from 'react-router';

export default class Sort extends React.Component {
  getWithSort() {
      return this.props.headlines(this.props.id, this.props.sort);
    }
  render() {
    const { sort } = this.props;
    return (
      <li>
        <Link onClick={this.getWithSort.bind(this)}>{sort}</Link>
      </li>
    );
  }
}