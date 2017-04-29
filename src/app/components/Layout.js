import React from 'react';
import { Link } from 'react-router';
import firebase from "../firebaseConfig";
import Nav from './layouts/Nav';
import Home from './Home';
import Newstore from '../stores/Newstore';
import * as NewsActions from '../actions/NewsActions';
import './Layout.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.getAll = this.getAll.bind(this);
    this.state = {
      name: '',
      sort: [],
      id: '',
      news: [],
      sources: [],
      sortedNews: [],
      sortLookout: false,
      user: {},
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const uid = user.uid;
        user.getToken().then((accessToken) => {
          console.log('Layout', user)
        });
      } else {
        console.log('User is signed out');
      }
    }, (error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    Newstore.on('change', this.getAll);
  }

   displayHeadlines(id, sort, name) {
    NewsActions.displayNews(id, sort, name);
  }

  getAll() {
    this.setState({
      news: Newstore.getNews().news,
      sortedNews: Newstore.getSortedNews(),
      id: Newstore.getNews().id,
      sort: Newstore.getNews().sort,
      name: Newstore.getNews().name,
      sources: Newstore.getSources(),
      sortLookout: true,
    });
  }

  render() {
    const { location } = this.props;
    console.log('User in Layout', this.state.user);
    return (
      <div>
        <Nav sources={this.state.sources} headlines={this.displayHeadlines.bind(this)} location={location} />
        <div class="container-fluid">
          <Home {...this.state} headlines={this.displayHeadlines.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Layout;
