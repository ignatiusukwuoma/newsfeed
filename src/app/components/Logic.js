import React from 'react';
import Button from './Button';

class Logic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ignatius', career: 'Software Developer' };
  }

  changeName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <h2> Welcome {this.state.name}</h2>
        <Button 
          career={this.state.career} name={this.state.name}
          changeName={this.changeName.bind(this)}
        />
      </div>
    );
  }
}
export default Logic;
