import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class Newstore extends EventEmitter {
  constructor() {
    super();
    this.news = { news: [], sortBy: '', id: '', sortParameters: [], name: '' };
    this.sourceNames = [];
    this.sortedNews = [];
  }

  displaySources(sources) {
    sources.forEach((source) => {
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

  displayNews(articles, sortBy, id, sortParameters, name) {
    this.news.news = [];
    this.sortedNews = [];
    articles.forEach((article) => {
      this.news.news.push({
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlImage: article.urlToImage,
        date: article.publishedAt,
      });
    });
    this.news.sortBy = sortBy;
    this.news.id = id;
    this.news.sortParameters = sortParameters;
    this.news.name = name;
    this.emit('change');
  }

  getWithSort(articles) {
    this.news.news = [];
    this.sortedNews = [];
    this.news.sortBy = '';
    articles.forEach((article) => {
      this.sortedNews.push({
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

  getSortedNews() {
    return this.sortedNews;
  }

  handleActions(action) {
    switch (action.type) {
      case 'DISPLAY_NEWS':
        this.displayNews(action.news.article, action.news.sortBy,
        action.news.id, action.news.sortParameters, action.news.name);
        break;
      case 'DISPLAY_WITH_SORT':
        this.getWithSort(action.news);
        break;
      case 'DISPLAY_SOURCES':
        this.displaySources(action.sources);
        break;
      default:
        // No operation
    }
  }
}

const newsStore = new Newstore();
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
