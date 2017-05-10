import expect from 'expect';
import dispatcher from '../src/app/dispatcher';
import NewsStore from '../src/app/stores/Newstore';

describe('News Store', () => {
  const response = {
    status: 'ok',
    source: 'techcrunch',
    sortBy: 'top',
    articles: [
      {
        author: 'http://www.abc.net.au/news/jessica-haynes/8462720',
        title: 'Everything you need to know about Trump\'s 100 days in office rally',
        description: 'From slamming news outlets and even a poem, US President Donald Trump\'s 100 days in office event had all the hallmarks of his wild campaign rallies.',
        url: 'http://www.abc.net.au/news/2017-04-30/key-moments-from-donald-trumps-100-day-rally/8483826',
        urlToImage: 'http://www.abc.net.au/news/image/8483928-1x1-700x700.jpg',
        publishedAt: '2017-04-30T03:27:17Z',
      },
      {
        author: null,
        title: 'Trump the target of correspondents\' dinner jokes despite skipping event',
        description: 'US President Donald Trump may have skipped the White House Correspondents\' Association dinner, but he was still the target of its jokes.',
        url: 'http://www.abc.net.au/news/2017-04-30/trump-target-of-jokes-after-skipping-white-house-press-dinner/8484054',
        urlToImage: 'http://www.abc.net.au/news/image/8484104-1x1-700x700.jpg',
        publishedAt: '2017-04-30T06:23:13Z',
      },
      {
        author: 'http://www.abc.net.au/news/dan-conifer/5189074',
        title: 'Labor backtracks on support for Adani coal mine',
        description: 'Federal Labor is stepping back from its support of Adani\'s proposed multi-billion-dollar Queensland coal project.',
        url: 'http://www.abc.net.au/news/2017-04-30/federal-labor-backtracks-on-support-of-adani-coal-mine/8483932',
        urlToImage: 'http://www.abc.net.au/news/image/8369208-1x1-700x700.jpg',
        publishedAt: '2017-04-30T04:52:56Z',
      },
      {
        author: null,
        title: 'Would apartments \'ruin\' this historic Sydney site?',
        description: 'Community group lashes back at the NSW Government\'s North Parramatta vandal apartment plans as Premier announces $310 million to revamp site.',
        url: 'http://www.abc.net.au/news/2017-04-30/premier-allocates-300-million-for-north-parramatta/8484014',
        urlToImage: 'http://www.abc.net.au/news/image/8484154-1x1-700x700.jpg',
        publishedAt: '2017-04-30T06:15:37Z',
      },
    ],
    storedArticles: [
      {
        author: 'http://www.abc.net.au/news/jessica-haynes/8462720',
        title: 'Everything you need to know about Trump\'s 100 days in office rally',
        description: 'From slamming news outlets and even a poem, US President Donald Trump\'s 100 days in office event had all the hallmarks of his wild campaign rallies.',
        url: 'http://www.abc.net.au/news/2017-04-30/key-moments-from-donald-trumps-100-day-rally/8483826',
        urlImage: 'http://www.abc.net.au/news/image/8483928-1x1-700x700.jpg',
        date: '2017-04-30T03:27:17Z',
      },
      {
        author: null,
        title: 'Trump the target of correspondents\' dinner jokes despite skipping event',
        description: 'US President Donald Trump may have skipped the White House Correspondents\' Association dinner, but he was still the target of its jokes.',
        url: 'http://www.abc.net.au/news/2017-04-30/trump-target-of-jokes-after-skipping-white-house-press-dinner/8484054',
        urlImage: 'http://www.abc.net.au/news/image/8484104-1x1-700x700.jpg',
        date: '2017-04-30T06:23:13Z',
      },
      {
        author: 'http://www.abc.net.au/news/dan-conifer/5189074',
        title: 'Labor backtracks on support for Adani coal mine',
        description: 'Federal Labor is stepping back from its support of Adani\'s proposed multi-billion-dollar Queensland coal project.',
        url: 'http://www.abc.net.au/news/2017-04-30/federal-labor-backtracks-on-support-of-adani-coal-mine/8483932',
        urlImage: 'http://www.abc.net.au/news/image/8369208-1x1-700x700.jpg',
        date: '2017-04-30T04:52:56Z',
      },
      {
        author: null,
        title: 'Would apartments \'ruin\' this historic Sydney site?',
        description: 'Community group lashes back at the NSW Government\'s North Parramatta vandal apartment plans as Premier announces $310 million to revamp site.',
        url: 'http://www.abc.net.au/news/2017-04-30/premier-allocates-300-million-for-north-parramatta/8484014',
        urlImage: 'http://www.abc.net.au/news/image/8484154-1x1-700x700.jpg',
        date: '2017-04-30T06:15:37Z',
      },
    ],
  };

  it('should exists', () => {
    expect(NewsStore).toExist();
  });

  it('should have an emit function', () => {
    expect(typeof NewsStore.emit).toBe('function');
  });

  it('should instantiate correctly', () => {
    expect(typeof NewsStore).toBe('object');
  });

  it('should instantiate the articles correctly', () => {
    expect(typeof NewsStore.news.news).toBe('object');
  });

  it('should have a getNews function', () => {
    expect(typeof NewsStore.getNews).toBe('function');
  });

  it('should have a getSortedNews function', () => {
    expect(typeof NewsStore.getSortedNews).toBe('function');
  });

  it('should have a getSources function', () => {
    expect(typeof NewsStore.getSources).toBe('function');
  });

  dispatcher.dispatch({
    type: 'DISPLAY_NEWS',
    news: {
      article: response.articles,
      sortBy: response.sortBy,
      id: response.source,
    },
  });

  it('should return techcrunch as the current source', () => {
    const actual = NewsStore.getNews().id;
    const expected = response.source;
    expect(actual).toEqual(expected);
  });

  it('should return top as the current sort value', () => {
    const actual = NewsStore.getNews().sortBy;
    const expected = response.sortBy;
    expect(actual).toEqual(expected);
  });

  it('should receive all news from the dispatcher', () => {
    const actual = NewsStore.getNews().news;
    const expected = response.storedArticles;
    expect(actual).toEqual(expected);
  });
});
