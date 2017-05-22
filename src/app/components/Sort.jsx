import React from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {string} the sort parameters from the api
 * @param {string} Sort parameter
 */
export default class Sort extends React.Component {
  render() {
    const { sort } = this.props;
    return (
      <option value={sort}> {sort} </option>
    );
  }
}
Sort.propTypes = {
  sort: PropTypes.string,
};
