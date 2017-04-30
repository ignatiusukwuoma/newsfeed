import React from 'react';

export default class Sort extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { sort } = this.props;
    return (
      <option value={sort}> {sort} </option>
    );
  }
}