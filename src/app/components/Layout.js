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
    this.state = {
      name: '',
      sortArr: [],
      id: '',
      sortBy: '',
      news: [],
      sources: [],
      sortedNews: [],
      user: {
        name: window.localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        uid: localStorage.getItem('uid'),
        photo: localStorage.getItem('photo'),
      },
    };
  }

  componentDidMount() {
    Newstore.on('change', this.getAll);
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('uid');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('photo');
      window.location = '/login';
    }, (error) => {
      console.error('Sign Out Error', error);
    });
  }

  displayHeadlines(id, sortArr, name) {
    NewsActions.displayNews(id, sortArr, name);
  }

  getAll() {
    this.setState({
      news: Newstore.getNews().news,
      sortBy: Newstore.getNews().sortBy,
      sortedNews: Newstore.getSortedNews(),
      id: Newstore.getNews().id,
      sortArr: Newstore.getNews().sortArr,
      name: Newstore.getNews().name,
      sources: Newstore.getSources(),
    });
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav sources={this.state.sources} user={this.state.user}
        headlines={this.displayHeadlines.bind(this)} location={location} signOut={this.signOut}/>
        <div class="container-fluid">
          <Home {...this.state} headlines={this.displayHeadlines.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Layout;
