import React from 'react';
import { Link } from 'react-router';
import Sort from './Sort';

export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.getHeadlines = this.getHeadlines.bind(this);
    this.collapseAfterCall = this.collapseAfterCall.bind(this);
  }

  getHeadlines() {
    return this.props.headlines(this.props.source.id,
    this.props.source.sortBy, this.props.source.name);
  }

  collapseAfterCall() {
    this.getHeadlines();
    if (this.props.open) {
      this.props.sourcesToggle();
    }
  }

  render() {
    const { id, name, sortBy } = this.props.source;
    return (
      <li class="sources">
        <Link onClick={this.collapseAfterCall} class="sourcesLink">{name}</Link>
      </li>
    );
  }
}
