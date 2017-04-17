import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class Newstore extends EventEmitter {
  constructor() {
    super();
    this.news = [];
    this.sourceNames = [];
  }
  displaySources(sourceArr) {
    sourceArr.forEach((source) => {
      this.sourceNames.push({
        id: source.id,
        name: source.name,
        sortBy: source.sortBysAvailable,
        category: source.category,
        description: source.description,
      });
    });
    this.emit('change');
  }

  displayNews(articlesArr) {
    articlesArr.forEach((article) => {
      this.news.push({
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlImage: article.urlToImage,
        date: article.publishedAt,
      });
    });
    this.emit('change');
  }
  getNews() {
    return this.news;
  }
  getSources() {
    return this.sourceNames;
  }
  handleActions(action) {
    switch (action.type) {
      case 'DISPLAY_NEWS':
        this.displayNews(action.news);
        break;
      case 'DISPLAY_SOURCES':
        this.displaySources(action.sources);
        break;
      default:
        console.log('Default action displayed');
        break;
    }
  }
}

const newsStore = new Newstore();
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
