import React from "react";
import { Link } from 'react-router';
import Sort from './Sort';

export default class Source extends React.Component {
  getHeadlines() {
    return this.props.news(this.props.source.id);
  }
  render() {
    const { id, name, sortBy } = this.props.source;
    const sortComponent = sortBy.map((sort, i) => {
      return <Sort key={i} sort={sort} />;
    });
    return (
      <li>
        <Link onClick={this.getHeadlines.bind(this)}>{name}</Link>
        <ul>
          {sortComponent}
        </ul>
      </li>
    );
  }
}