import React from 'react';
import firebase from "../firebaseConfig";
import * as NewsActions from '../actions/NewsActions';

export default class Login extends React.Component {

  // storeUserProfile(user) {
  //   window.localStorage.setItem('uid', user.uid);
  //   window.localStorage.setItem('email', user.email);
  //   window.localStorage.setItem('name', user.displayName);
  // }

  componentDidMount() {
     // FirebaseUI config.
     const uiConfig = {
		'signInFlow': 'popup',
		'signInSuccessUrl': '/',
		'signInOptions': [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		],
		'tosUrl': 'https://www.google.com',
		'callbacks': {
			'signInSuccess': (user, credential, redirectUrl) => {
        console.log('User just signed in');
        window.localStorage.setItem('uid', user.uid);
        window.localStorage.setItem('email', user.email);
        window.localStorage.setItem('name', user.displayName);
        window.localStorage.setItem('photo', user.photoURL);
        return true;
			}
		}
	};

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-container', uiConfig);
  }

  render() {
   
    return (
      <div>
        <h1 class="text-center">Sign In With Google</h1>
        <div id="firebaseui-container"></div>
      </div>
    );
  }
}