import React from 'react';
import Newstore from '../stores/Newstore';
import Sidebar from './layouts/Sidebar';
import MainScreen from './layouts/MainScreen';
import * as NewsActions from '../actions/NewsActions';

class Home extends React.Component {
  render() {
    return (
      <div class="row">
        <Sidebar sources={this.props.sources} headlines={this.props.headlines} />
        <MainScreen {...this.props} />
      </div>
    );
  }
}
export default Home;
