import React from 'react';
import Newstore from '../stores/Newstore';
import Sidebar from './layouts/Sidebar';
import MainScreen from './layouts/MainScreen';
import * as NewsActions from '../actions/NewsActions';

/**
 * Displays the entire screen asides Nav and Footer
 * @extends React.Component
 */
class Home extends React.Component {


  /**
   * Births the Sidebar and MainScreen sections
   * @param {any} The entire state of Layout
   * @returns Two sections of the screen as components
   * @memberOf Home
   */
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
