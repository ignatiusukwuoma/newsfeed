import React from "react";
import { Link } from 'react-router';

export default class Article extends React.Component {
  
  render() {
    const { article } = this.props;
    return (
      <div class="col-sm-6">
        <article class="article">
          <a class="read-more" href={article.url} target="/blank">
            <header>
              <div class="preview">
                <img class="img-responsive" alt="" src={article.urlImage} />
              </div>
                {/*<span class={article.publishedAt}></span>*/}
              <h4>{article.title}</h4>
            </header>
            <p>{article.description}</p>
          </a>
        </article>
      </div>
    );
  }
}
