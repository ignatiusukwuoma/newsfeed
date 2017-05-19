import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Individual source details
 * @class Source
 * @extends {React.Component}
 */
export default class Source extends React.Component {

  /**
   * Creates an instance of Source.
   * @param {object} props - source object
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
   * @returns {function} call to display news
   * @memberOf Source
   */
  getHeadlines() {
    return this.props.headlines(this.props.source.id,
    this.props.source.sortBy, this.props.source.name);
  }

  /**
   * Calls the getHeadlines function
   * Checks if screen is mobile to collapse sidebar
   * @returns {function} call to display news and check screensize
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
   * @returns {object} a source object
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
  open: PropTypes.bool,
  sourcesToggle: PropTypes.func,
};
