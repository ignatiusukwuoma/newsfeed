import React from "react";
import { Link } from 'react-router';
import Sort from './Sort';

export default class Source extends React.Component {
  constructor(props){
    super(props);
    this.getHeadlines = this.getHeadlines.bind(this);
  }

  getHeadlines() {
    return this.props.headlines(this.props.source.id, this.props.source.sortBy, this.props.source.name);
  }

  render() {
    const { id, name, sortBy, category } = this.props.source;
    return (
      <li class="sources">
        <Link onClick={this.getHeadlines} class="sourcesLink">{name}</Link>
      </li>
    );
  }
}