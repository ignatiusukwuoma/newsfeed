import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class Newstore extends EventEmitter {
  constructor() {
    super();
    this.news = '';
    this.sourceNames = [];
  }
  displaySources(sourceArr) {
    sourceArr.forEach((source) => {
      this.sourceNames.push(source.name);
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
        this.news = action.news;
        this.emit('change');
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
