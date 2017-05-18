import Request from 'superagent';
import dotenv from 'dotenv';
import dispatcher from '../dispatcher';

dotenv.config();

/**
 * Makes the API call to get news headlines
 * @param {string} id - ID of the clicked source
 * @param {array} sortParameters - sort parameters available for the source
 * @param {string} name - name of the clicked source
 */
export const displayNews = (id, sortParameters, name) => {
  const url =
    `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_API_KEY}`;
  Request.get(url)
    .query({ source: id })
    .end((err, response) => {
      if (err) {
        alert('Oh snap! There was a problem. Please refresh the page.');
      }
      dispatcher.dispatch({
        type: 'DISPLAY_NEWS',
        news: {
          article: response.body.articles,
          sortBy: response.body.sortBy,
          id: response.body.source,
          sortParameters,
          name,
        },
      });
    });
};

/**
 * Makes an API call to get news headlines using one of the sort parameters
 * @param {string} id - ID of the clicked source
 * @param {array} sort - sort parameter used to make request
 */
export const getWithSort = (id, sort) => {
  const url =
    `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_API_KEY}`;
  Request.get(url)
    .query({ source: id, sortBy: sort })
    .end((err, response) => {
      if (err) {
        alert('Oh snap! There was a problem. Please refresh the page.');
      }
      dispatcher.dispatch({
        type: 'DISPLAY_WITH_SORT',
        news: response.body.articles,
      });
    });
};

/**
 * Makes API call to retrieve the list of sources
 */
export const displaySources = () => {
  const url = 'https://newsapi.org/v1/sources?language=en';
  Request.get(url).end((err, response) => {
    if (err) {
      alert('Oh snap! There was a problem. Please refresh the page.');
    }
    dispatcher.dispatch({
      type: 'DISPLAY_SOURCES',
      sources: response.body.sources,
    });
  });
};
