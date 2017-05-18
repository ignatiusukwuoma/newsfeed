import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * Stores all the data from API calls
 * Emits a change whenever values change
 * @class Newstore
 * @extends {EventEmitter}
 */
class Newstore extends EventEmitter {

  /**
   * Creates an instance of Newstore.
   * Initialises the necessary variables
   * @memberOf Newstore
   */
  constructor() {
    super();
    this.news = { news: [], sortBy: '', id: '', sortParameters: [], name: '' };
    this.sourceNames = [];
    this.sortedNews = [];
    this.error = false;
  }

  /**
   * Picks up the sources array returned by Actions
   * Takes what the app requires and arrages it
   * @param {array} sources - array of objects
   * emits a change
   * @memberOf Newstore
   */
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

  /**
   * Initialises news and sorted news
   * Gets the news headlines and keeps what the app needs
   * @param {array} articles - an array of objects
   * @param {string} sortBy - the sort parameter used to get the headlines
   * @param {string} id - the id of the clicked source
   * @param {array} sortParameters - the sort parameters for that source
   * @param {string} name - name of the clicked source
   * emits change
   * @memberOf Newstore
   */
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

  /**
   * Initialises news and sorted news
   * Gets the sorted news headlines and keeps what the app needs
   * @param {array} articles - an array of objects
   * emits change
   * @memberOf Newstore
   */
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

  handleError(error) {
    if (error === true) {
      this.error = error;
      this.emit('change');
    }
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

  getError() {
    return this.error;
  }
  /**
   * Specifies how store handles different action types
   * @param {object} action - event dispatched by Actions
   * Calls the function in charge of an action type
   * @memberOf Newstore
   */
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
      case 'ERROR_LOADING':
        this.handleError(action.error);
        break;
      default:
        // No operation
    }
  }
}

const newsStore = new Newstore();
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
