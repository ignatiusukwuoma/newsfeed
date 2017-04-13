import { EventEmitter } from 'events';

class Newstore extends EventEmitter {
  constructor() {
    super();
    this.news = 'News';
  }
}

const newsStore = new Newstore;

export default newsStore;
