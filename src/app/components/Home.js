import React from 'react';
import Source from './Source';
import Article from './Article';
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
    const { sources } = this.state;
    const sourceComponent = sources.map((source, i) => {
      if (source.category === 'entertainment') {
        return (<Source key={i} source={source} headlines={this.displayHeadlines} />);
      }
    });
    return (
      <div>
        <ul>
          {sourceComponent}
        </ul>
        <div>
          {articleComponent}
        </div>
      </div>
    );
  }
}
export default Home;
