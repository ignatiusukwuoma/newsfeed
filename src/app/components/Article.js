import React from "react";
import { Link } from 'react-router';

export default class Article extends React.Component {
  
  render() {
    const { article } = this.props;
    return (
      <div class="article">
        <h4>{article.title}</h4> 
        <p> {article.description} 
          <a href={article.url} target="/blank"> Read More</a>
        </p>
        
      </div>
    );
  }
}
