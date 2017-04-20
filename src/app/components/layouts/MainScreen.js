import React from "react";
import Home from '../Home';
import Article from '../Article';
import * as NewsActions from '../../actions/NewsActions';

export default class MainScreen extends React.Component {
  render() {
    const { news } = this.props;
    const articleComponent = news.map((article, i) => {
      return (<Article key={i} article={article} />);
    });
    return (
      <div class="col-sm-10 mainscreen-main">
        {articleComponent}
      </div>
    );
  }
}
