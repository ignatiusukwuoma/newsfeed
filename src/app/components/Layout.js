import React from 'react';
import { Link } from 'react-router';
import firebase from '../firebaseConfig';
import Nav from './layouts/Nav';
import Home from './Home';
import Footer from './layouts/Footer';
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
      sortParameters: [],
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

  displayHeadlines(id, sortParameters, name) {
    NewsActions.displayNews(id, sortParameters, name);
  }

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

  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav sources={this.state.sources} user={this.state.user.hottestnews}
        headlines={this.displayHeadlines} location={location}
        signOut={this.signOut}/>
        <div class="container-fluid">
          <Home {...this.state} headlines={this.displayHeadlines}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
