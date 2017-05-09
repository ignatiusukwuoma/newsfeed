import React from 'react';

/**
 * Stateless component
 * @param {string} Sort parameter
 */
export default ({ sort }) => (
  <option value={sort}> {sort} </option>
);
