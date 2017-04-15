import React from "react";
import { Link } from 'react-router';

export default class Article extends React.Component {
  
  render() {
    const { article } = this.props;
    return (
      <div>
        <h3><a href={article.url} target="/blank">{article.title}</a></h3>
      </div>
    );
  }
}
