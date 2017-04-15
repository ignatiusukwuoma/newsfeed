import Request from 'superagent';
import dispatcher from '../dispatcher';

export const displayNews = (id) => {
  const url = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe';
  Request.get(url)
    .query({ source: id })
    .query({ sortBy: 'top' })
    .end((err, response) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Received a response from articles');
      }
      dispatcher.dispatch({
        type: 'DISPLAY_NEWS',
        news: response.body.articles,
      });
    });
};

export const displaySources = () => {
  const url = 'https://newsapi.org/v1/sources?language=en&category=business';
  Request.get(url).end((err, response) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Received a response from sources');
    }
    dispatcher.dispatch({
      type: 'DISPLAY_SOURCES',
      sources: response.body.sources,
    });
  });
};

