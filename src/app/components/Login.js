import React from 'react';
import firebase from '../firebaseConfig';
import * as NewsActions from '../actions/NewsActions';

export default class Login extends React.Component {

  componentDidMount() {
     // Firebase Login User Interface
    const googleLoginConfiguration = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      tosUrl: 'https://www.google.com',
      callbacks: {
        signInSuccess: (user, credential, redirectUrl) => {
          const userDetails = JSON.stringify(
            {
              uid: user.uid,
              name: user.displayName,
              photo: user.photoURL,
            }
          );
          localStorage.setItem('hottestnews', userDetails);
          return true;
        }
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const googleLoginButton = new firebaseui.auth.AuthUI(firebase.auth());
    googleLoginButton.start('#firebaseui-container', googleLoginConfiguration);
  }

  render() {
    return (
      <div class="container-fluid login-page">
        <h1 class="brand">HOTTEST NEWS</h1>
        <div class="content">
          <h2 class="text-center headline">Get Live Headlines From The
            Most Popular News Sources Around the World</h2>
          <div id="firebaseui-container"></div>
        </div>
      </div>
    );
  }
}
