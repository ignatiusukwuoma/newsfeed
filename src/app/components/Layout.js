import React from 'react';
import { Link } from 'react-router';
import firebase from '../firebaseConfig';
import Nav from './layouts/Nav';
import Home from './Home';
import Newstore from '../stores/Newstore';
import * as NewsActions from '../actions/NewsActions';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.getAll = this.getAll.bind(this);
    this.signOut = this.signOut.bind(this);
    this.displayHeadlines = this.displayHeadlines.bind(this);
    const userProfile = JSON.parse(localStorage.getItem('hottestnews'));
    this.state = {
      name: '',
      sortParams: [],
      id: '',
      sortBy: '',
      news: [],
      sources: [],
      sortedNews: [],
      user: {
        hottestnews: userProfile,
      },
    };
  }

  componentDidMount() {
    Newstore.on('change', this.getAll);
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('hottestnews');
      window.location = '/login';
    }, (error) => {
      console.error('Sign Out Error', error);
    });
  }

  displayHeadlines(id, sortParams, name) {
    NewsActions.displayNews(id, sortParams, name);
  }

  getAll() {
    this.setState({
      news: Newstore.getNews().news,
      sortBy: Newstore.getNews().sortBy,
      sortedNews: Newstore.getSortedNews(),
      id: Newstore.getNews().id,
      sortParams: Newstore.getNews().sortParams,
      name: Newstore.getNews().name,
      sources: Newstore.getSources(),
    });
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav sources={this.state.sources} user={this.state.user.hottestnews}
        headlines={this.displayHeadlines} location={location} signOut={this.signOut}/>
        <div class="container-fluid">
          <Home {...this.state} headlines={this.displayHeadlines}/>
        </div>
      </div>
    );
  }
}

export default Layout;
