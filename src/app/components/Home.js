import React from 'react';
import Newstore from '../stores/Newstore';
import Sidebar from './layouts/Sidebar';
import MainScreen from './layouts/MainScreen';
import * as NewsActions from '../actions/NewsActions';

/**
 * Class to display the Home Page
 * @extends React.Component
 */
class Home extends React.Component {
  render() {
    return (
      <div class="row">
        <Sidebar sources={this.props.sources}
        headlines={this.props.headlines}
        open={this.props.open} sourcesToggle={this.props.sourcesToggle}/>
        <MainScreen {...this.props} />
      </div>
    );
  }
}
export default Home;
