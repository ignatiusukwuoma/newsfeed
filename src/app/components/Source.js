import React from "react";
import { Link } from 'react-router';
import Sort from './Sort';

export default class Source extends React.Component {
  getHeadlines() {
    return this.props.headlines(this.props.source.id);
  }
  render() {
    const { id, name, sortBy, category } = this.props.source;
    const sortComponent = sortBy.map((sort, i) => {
      return <Sort key={i} id={id} sort={sort} headlines={this.props.headlines}/>;
    });
    return (
      <li class="sources">
        <Link onClick={this.getHeadlines.bind(this)} class="sourcesLink">{name}</Link>
      </li>
    );
  }
}