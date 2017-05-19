import React from 'react';
import defaultUrlImage from '../../public/images/newsimage.jpg';

/**
 * Stateless component
 * Displays an individual article
 * @param {object} An article object
 * @returns {object} An article with image, heading and description
 */
export default ({ article }) => (
    <div class="col-sm-4">
      <article class="article panel">
        <a class="read-more" href={article.url} target="_blank">
          <header>
            <div class="preview">
              <img class="img-responsive" alt="" src={article.urlImage
              || defaultUrlImage} />
            </div>
            <h4>{article.title}</h4>
          </header>
          <p>{article.description ?
            `${article.description.slice(0, 100)}...` : ''}
          </p>
        </a>
      </article>
    </div>
  );
