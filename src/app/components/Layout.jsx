import React from 'react';
import firebase from '../firebaseConfig';
import Nav from './layouts/Nav.jsx';
import Home from './Home.jsx';
import Footer from './layouts/Footer.jsx';
import Newstore from '../stores/Newstore';
import * as NewsActions from '../actions/NewsActions';
import './Layout.scss';

/**
 * The layout of the entire srceen
 * @class Layout
 * @extends {React.Component}
 */
class Layout extends React.Component {

  /**
   * Creates an instance of Layout.
   * Sets some state of the application
   * @memberOf Layout
   */
  constructor() {
    super();
    this.getAll = this.getAll.bind(this);
    this.signOut = this.signOut.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.displayHeadlines = this.displayHeadlines.bind(this);
    const userProfile = JSON.parse(localStorage.getItem('hottestnews'));
    this.state = {
      name: '',
      sortParameters: [],
      id: '',
      sortBy: '',
      news: [],
      sources: [],
      sortedNews: [],
      user: {
        hottestnews: userProfile,
      },
      grid: '',
      open: false,
      error: false,
    };
  }

  /**
   * Checks if user is loggedIn
   * Checks if screen is mobile
   * @returns {pathname} appropriate location and view
   * @memberOf Layout
   */
  componentWillMount() {
    if (window.location.pathname === '/' && !window.localStorage.hottestnews) {
      window.location.href = '/login';
    }
    if (screen.width < 768) {
      this.setState({ grid: 'col-sm-12 mainscreen-main' });
    } else {
      this.setState({ grid: 'col-sm-10 mainscreen-main' });
    }
  }

  /**
   * Listens for a change event in the store
   * @returns {function} the function to set new state
   * @memberOf Layout
   */
  componentDidMount() {
    Newstore.on('change', this.getAll);
  }

  /**
   * Determines if mobile sidebar pops up
   * @returns {function} Sets the open state
   * @memberOf Layout
   */
  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  /**
   * Signs the user out of the application
   * @returns {pathname} Takes user back to login component
   * @memberOf Layout
   */
  signOut() {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('hottestnews');
        window.location = '/login';
      }, () => {
        NewsActions.displayError();
      });
  }

  /**
   * Makes an API call for Articles
   * @param {any} id - of a clicked source
   * @param {any} sortParameters - the sortBys Available of the source
   * @param {any} name - of the clicked source
   * @returns {function} Call to get the news
   * @memberOf Layout
   */
  displayHeadlines(id, sortParameters, name) {
    NewsActions.displayNews(id, sortParameters, name);
  }

  /**
   * Sets the state of Layout
   * @returns {state} Sets the state
   * @memberOf Layout
   */
  getAll() {
    this.setState({
      news: Newstore.getNews().news,
      sortBy: Newstore.getNews().sortBy,
      sortedNews: Newstore.getSortedNews(),
      id: Newstore.getNews().id,
      sortParameters: Newstore.getNews().sortParameters,
      name: Newstore.getNews().name,
      sources: Newstore.getSources(),
      error: Newstore.getError(),
    });
  }

  displayLayout() {
    if (this.state.error) {
      window.location.pathname = '/error';
    }
    return (
      <div>
        <Nav
          sources={this.state.sources} user={this.state.user.hottestnews}
          headlines={this.displayHeadlines} signOut={this.signOut}
          sourcesToggle={this.handleToggle}
        />
        <div class="container-fluid">
          <Home
            {...this.state} headlines={this.displayHeadlines}
            sourcesToggle={this.handleToggle}
          />
        </div>
        <Footer />
      </div>
    );
  }

  /**
   * Lays out all parent components in the screen
   * @returns {View} The major components of the window
   * @memberOf Layout
   */
  render() {
    return this.displayLayout();
  }
}

export default Layout;
