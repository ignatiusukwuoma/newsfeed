import React from 'react';
import firebase from '../firebaseConfig';

/**
 * Displays the Login Page
 * @class Login
 * @extends {React.Component}
 */
export default class Login extends React.Component {

  /**
   * Sets the Firebase Login User Configuration
   * @returns {View} The Google Login Button
   * @memberOf Login
   */
  componentDidMount() {
    const googleLoginConfiguration = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      tosUrl: 'https://www.google.com',
      callbacks: {
        signInSuccess: (user) => {
          const userDetails = JSON.stringify(
            {
              uid: user.uid,
              name: user.displayName,
              photo: user.photoURL,
            },
          );
          localStorage.setItem('hottestnews', userDetails);
          return true;
        },
      },
    };

    // Initialize the Google Login Button
    const googleLoginButton = new firebaseui.auth.AuthUI(firebase.auth());
    googleLoginButton.start('#firebaseui-container', googleLoginConfiguration);
  }

  /**
   * Renders the full login page
   * @returns {View} The Google login button
   * @memberOf Login
   */
  render() {
    return (
      <div class="container-fluid login-page">
        <h1 class="brand">HOTTEST NEWS</h1>
        <div class="content">
          <h2 class="text-center headline">
            Get Live Headlines From The
            Most Popular News Sources Around The World
          </h2>
          <div id="firebaseui-container" />
        </div>
      </div>
    );
  }
}
