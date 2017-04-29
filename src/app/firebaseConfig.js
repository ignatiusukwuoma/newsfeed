import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBfetXIUjgUNRY42M3dtdr1ol6-dV6P5RY',
  authDomain: 'newsfeed-165004.firebaseapp.com',
  databaseURL: 'https://newsfeed-165004.firebaseio.com',
  projectId: 'newsfeed-165004',
  storageBucket: 'newsfeed-165004.appspot.com',
  messagingSenderId: '315341524768'
};
firebase.initializeApp(config);
export default firebase;
