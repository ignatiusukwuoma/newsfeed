import React from 'react';

export default class Article extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }
  render() {
    return (
      <div>
        <input value={this.props.name} onChange={this.handleChange.bind(this)} />
        <small>{this.props.name} is a {this.props.career}</small>
      </div>
    );
  }
}
