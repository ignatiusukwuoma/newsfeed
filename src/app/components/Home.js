import React from 'react';
import Article from './Article';
import Sidebar from './layouts/Sidebar';
import Newstore from '../stores/Newstore';
import * as NewsActions from '../actions/NewsActions';

class Home extends React.Component {
  constructor() {
    super();
    this.getAll = this.getAll.bind(this);
    this.state = {
      news: Newstore.getNews(),
      sources: Newstore.getSources(),
    };
  }

  componentWillMount() {
    Newstore.on('change', this.getAll);
  }

  componentDidMount() {
    this.showSources();
  }

  showSources() {  
    NewsActions.displaySources();
  }

  displayHeadlines(id, sort='top') {
    NewsActions.displayNews(id, sort);
  }

  getAll() {
    this.setState({
      news: Newstore.getNews(),
      sources: Newstore.getSources(),
    });
  }
  
  render() {
    const { news } = this.state;
    const articleComponent = news.map((article, i) => {
      return (<Article key={i} article={article} />);
    });
    return (
      <div>
        <Sidebar sources={this.state.sources}/>
        <div>
          {articleComponent}
        </div>
      </div>
    );
  }
}
export default Home;
