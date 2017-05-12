import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Sort from './Sort';

/**
 * Individual source details
 * @class Source
 * @extends {React.Component}
 */
export default class Source extends React.Component {

  /**
   * Creates an instance of Source.
   * @param {object} The source object
   * @memberOf Source
   */
  constructor(props) {
    super(props);
    this.getHeadlines = this.getHeadlines.bind(this);
    this.collapseAfterCall = this.collapseAfterCall.bind(this);
  }

  /**
   * A function from Layout passed down as props
   * Makes an API call for articles
   * @returns a list of article with the source name and its sort parameters
   * @memberOf Source
   */
  getHeadlines() {
    return this.props.headlines(this.props.source.id,
    this.props.source.sortBy, this.props.source.name);
  }

  /**
   * Calls the getHeadlines function
   * Checks if screen is mobile to collapse sidebar
   * @memberOf Source
   */
  collapseAfterCall() {
    this.getHeadlines();
    if (this.props.open) {
      this.props.sourcesToggle();
    }
  }

  /**
   * Renders an Individual source object
   * @returns a source object
   * @memberOf Source
   */
  render() {
    const { name } = this.props.source;
    return (
      <li class="sources">
        <Link onClick={this.collapseAfterCall} class="sourcesLink">{name}</Link>
      </li>
    );
  }
}

Source.propTypes = {
  source: PropTypes.object,
  headlines: PropTypes.func,
};
