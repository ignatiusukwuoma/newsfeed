import Request from 'superagent';
import dispatcher from '../dispatcher';

export function displayNews() {
  const url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=213327409d384371851777e7c7f78dfe&sortBy=latest';
  Request.get(url).end((err, response) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Received a response from articles', response);
    }
    dispatcher.dispatch({
      type: 'DISPLAY_NEWS',
      news: response.body.source,
    });
  });
}

export function displaySources() {
  const url = 'https://newsapi.org/v1/sources?language=en&category=business';
  Request.get(url).end((err, response) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Received a response from sources', response);
    }
    dispatcher.dispatch({
      type: 'DISPLAY_SOURCES',
      sources: response.body.sources,
    });
  });
}
