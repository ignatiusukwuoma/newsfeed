import React from 'react';
import { Link } from 'react-router';
import firebase from '../firebaseConfig';
import Nav from './layouts/Nav';
import Home from './Home';
import Footer from './layouts/Footer';
import Newstore from '../stores/Newstore';
import * as NewsActions from '../actions/NewsActions';
import './Layout.scss';


/**
 * The layout of our entire srceen
 * @class Layout
 * @extends {React.Component}
 */
class Layout extends React.Component {


  /**
   * Creates an instance of Layout.
   * Sets some state of the application
   * @memberOf Layout
   */
  constructor(props) {
    super(props);
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
    };
  }


  /**
   * Checks if user is loggedIn
   * CHecks if screen is mobile
   * @returns appropriate location and view
   * @memberOf Layout
   */
  componentWillMount() {
    if (window.location.pathname === '/' && !window.localStorage.hottestnews) {
      window.location.href = '/login';
    }
    if (window.innerWidth < 768) {
      this.setState({ grid: 'col-sm-12 mainscreen-main' });
    } else {
      this.setState({ grid: 'col-sm-10 mainscreen-main' });
    }
  }


  /**
   * Listens for a change event in the store
   * @returns the function to set new state
   * @memberOf Layout
   */
  componentDidMount() {
    Newstore.on('change', this.getAll);
  }


  /**
   * Determines if mobile sidebar pops up
   * @memberOf Layout
   */
  handleToggle() {
    this.setState({ open: !this.state.open });
  }


  /**
   * Signs the user out of the application
   * @memberOf Layout
   */
  signOut() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('hottestnews');
      window.location = '/login';
    }, (error) => {
      console.error('Sign Out Error', error);
    });
  }


  /**
   * Makes an API call for Articles
   * @param {any} id - of a clicked source
   * @param {any} sortParameters - the sortBys Available of the source
   * @param {any} name - of the clicked source
   * @memberOf Layout
   */
  displayHeadlines(id, sortParameters, name) {
    NewsActions.displayNews(id, sortParameters, name);
  }


  /**
   * Sets the state of Layout
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
    });
  }


  /**
   * Lays out all parent components in the screen
   * @returns The major sections of the window
   * @memberOf Layout
   */
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav sources={this.state.sources} user={this.state.user.hottestnews}
        headlines={this.displayHeadlines} location={location}
        signOut={this.signOut} sourcesToggle={this.handleToggle}/>
        <div class="container-fluid">
          <Home {...this.state} headlines={this.displayHeadlines}
          sourcesToggle={this.handleToggle}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
