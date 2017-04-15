import React from 'react';
import Article from './Article';
import Source from './Source';
import * as NewsActions from '../actions/NewsActions';
import Newstore from '../stores/Newstore';


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
    this.displayNews();
  }

  displayNews() {  
    NewsActions.displaySources();
  }

  displayHeadlines(id) {
    console.log(id);
    NewsActions.displayNews(id);
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
      return <Article key={i} article={article} />;
    });
    const { sources } = this.state;
    const sourceComponent = sources.map((source, i) => {
      return <Source key={i} source={source} news={this.displayHeadlines} />;
    });
    return (
      <div>
        <h1>Latest from TechCrunch</h1>
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
