import Request from 'superagent';
import dispatcher from '../dispatcher';

export const displayNews = (id, sortArr, name) => {
  const url = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe';
  Request.get(url)
    .query({ source: id })
    .query({ sortBy: sortArr })
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
          sortArr,
          name,
        }
      });
    });
};

export const getWithSort = (id, sort) => {
  const url = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe';
  Request.get(url)
    .query({ source: id })
    .query({ sortBy: sort })
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
