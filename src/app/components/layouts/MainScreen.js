import React from "react";
import Home from '../Home';
import Article from '../Article';
import Sort from '../Sort';
import * as NewsActions from '../../actions/NewsActions';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getWithSort = this.getWithSort.bind(this);
    this.state = {
      sourceName: '',
      sourceId: '',
      sourceSort: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     sourceName: 
  //     sourceId:
  //     sourceSort: 
  //   });
  // }

  getWithSort(event) {
    NewsActions.getWithSort(this.props.id, event.target.value);
  }

  render() {
    const { news, id, name, sortedNews} = this.props;
    let sort = this.props.sort;
    // sort = (sort instanceof Array) ? sort : [sort];
    const sortComponent = sort.map((sorter, i) => {
      return (<Sort sort={sorter} key={i} />);
    });
    const sortedNewsComponent = sortedNews.map((article, i) => {
      return (<Article key={i} article={article} />);
    });
    const articleComponent = news.map((article, i) => {
      return (<Article key={i} article={article} />);
    });
    // const articleComponent = news.map((article) => {
    //   return (article);
    // }) 
    
    return (
      <div class="col-sm-10 mainscreen-main">
        <h2>HeadLines</h2>
        <h3>{name}</h3>
        <select onChange={this.getWithSort}>
          {sortComponent}
        </select>
        {articleComponent}
        {sortedNewsComponent}
      </div>
    );
  }
}
