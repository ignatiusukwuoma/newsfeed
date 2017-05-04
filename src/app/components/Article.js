import React from 'react';
import PropTypes from 'prop-types';

export default ({ article }) => (
    <div class="col-sm-4">
      <article class="article">
        <a class="read-more" href={article.url} target="_blank">
          <header>
            <div class="preview">
              <img class="img-responsive" class="article-image" alt="" src={article.urlImage} />
            </div>
            <h4>{article.title}</h4>
          </header>
          <p>{article.description}</p>
        </a>
      </article>
    </div>
  );
