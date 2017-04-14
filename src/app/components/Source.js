import React from "react";

export default class Source extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { source } = this.props;
    return (
      <li>
        {source}
      </li>
    );
  }
}