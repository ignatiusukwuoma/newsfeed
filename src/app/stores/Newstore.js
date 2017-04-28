import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class Newstore extends EventEmitter {
  constructor() {
    super();
    this.news = { news: [], id: '', sort: [], name: '' };
    this.sourceNames = [];
    this.sortedNews = [];
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

  displayNews(articlesArr, id, sort, name) {
    this.news.news = [];
    this.sortedNews = [];
    articlesArr.forEach((article) => {
      this.news.news.push({
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlImage: article.urlToImage,
        date: article.publishedAt,
      });
    });
    this.news.id = id;
    this.news.sort = sort;
    this.news.name = name;
    this.emit('change');
  }

  getWithSort(articlesArr) {
    this.news.news = [];
    this.sortedNews = [];
    articlesArr.forEach((article) => {
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
        this.displayNews(action.news.article, action.news.id, action.news.sort, action.news.name);
        break;
      case 'DISPLAY_WITH_SORT':
        this.getWithSort(action.news);
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
