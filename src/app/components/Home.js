import React from 'react';
import Newstore from '../stores/Newstore';
import Sidebar from './layouts/Sidebar';
import MainScreen from './layouts/MainScreen';
import * as NewsActions from '../actions/NewsActions';

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.getAll = this.getAll.bind(this);
  //   this.state = {
  //     name: '',
  //     sort: [],
  //     id: '',
  //     news: [],
  //     sources: [],
  //     sortedNews: [],
  //     sortLookout: false,
  //   };
  // }

  // componentDidMount() {
  //   Newstore.on('change', this.getAll);
  // }

  // componentWillMount() {
  //   this.props.collectSources(this.state.sources);
  // }

  // displayHeadlines(id, sort, name) {
  //   NewsActions.displayNews(id, sort, name);
  // }

  // getAll() {
  //   this.setState({
  //     news: Newstore.getNews().news,
  //     sortedNews: Newstore.getSortedNews(),
  //     id: Newstore.getNews().id,
  //     sort: Newstore.getNews().sort,
  //     name: Newstore.getNews().name,
  //     sources: Newstore.getSources(),
  //     sortLookout: true,
  //   });
  // }
  
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
