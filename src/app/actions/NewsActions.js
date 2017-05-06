import Request from 'superagent';
import dotenv from 'dotenv';
import dispatcher from '../dispatcher';

dotenv.config();

export const displayNews = (id, sortParameters, name) => {
  const url = `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_API_KEY}`;
  Request.get(url)
    .query({ source: id })
    .end((err, response) => {
      if (err) {
        console.log('Error', err);
      }
      dispatcher.dispatch({
        type: 'DISPLAY_NEWS',
        news: {
          article: response.body.articles,
          sortBy: response.body.sortBy,
          id: response.body.source,
          sortParameters,
          name,
        }
      });
    });
};

export const getWithSort = (id, sort) => {
  const url = `https://newsapi.org/v1/articles?apiKey=${process.env.NEWS_API_KEY}`;
  Request.get(url)
    .query({ source: id, sortBy: sort })
    .end((err, response) => {
      if (err) {
        console.log('Error', err);
      }
      dispatcher.dispatch({
        type: 'DISPLAY_WITH_SORT',
        news: response.body.articles,
      });
    });
};

export const displaySources = () => {
  const url = 'https://newsapi.org/v1/sources?language=en';
  Request.get(url).end((err, response) => {
    if (err) {
      console.log('Error', err);
    }
    dispatcher.dispatch({
      type: 'DISPLAY_SOURCES',
      sources: response.body.sources,
    });
  });
};
