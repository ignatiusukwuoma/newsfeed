import React from 'react';
import Article from './Article';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Ignatius', career: 'Software Developer' };
  }

  changeName(name) {
    this.setState({ name });
  }
  
  render() {
    return (
      <div>
        <h2> Welcome {this.state.name}</h2>
        <Article 
          career={this.state.career} name={this.state.name}
          changeName={this.changeName.bind(this)}
        />
      </div>
    );
  }
}
export default Home;
