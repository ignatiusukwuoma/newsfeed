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
    NewsActions.displayNews();
    NewsActions.displaySources();
  }

  getAll() {
    this.setState({
      news: Newstore.getNews(),
      sources: Newstore.getSources(),
    });
  }
  
  render() {
    const { news } = this.state;
    const { sources } = this.state;
    const sourceComponent = sources.map((source, i) => {
        return <Source key={i} source={source} />;
    });
    return (
      <div>
        <button onClick={this.displayNews.bind(this)}>Display News</button>
        <h1>Latest from TechCrunch</h1>
        <p>{news}</p>
        <ul>
          {sourceComponent}
        </ul>
      </div>
    );
  }
}
export default Home;
