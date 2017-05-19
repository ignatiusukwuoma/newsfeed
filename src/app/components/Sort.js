import React from 'react';

/**
 * Stateless component
 * @returns {string} the sort parameters from the api
 * @param {string} Sort parameter
 */
export default ({ sort }) => (
  <option value={sort}> {sort} </option>
);
