import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = new createBrowserHistory();

let Parent = null;
export default class Login extends React.Component {
  constructor (props) {
    super(props);
    Parent = this;
  }
  componentDidMount() {
    window.addEventListener('googleLoaded', this.renderLoginButton);
  }

  renderLoginButton() {
		gapi.signin2.render('g-signin2', {
			'scope': 'https://www.googleapis.com/auth/plus.login',
			'width': 400,
			'height': 100,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': Parent.onSignIn,
      'onfailure': Parent.signInFail
		});
  }
	
  onSignIn(googleUser) {
    history.replace("/");
    console.log('History',history);
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('User is signed in');
  }

  render() {
    return (
      <div class="google-button">
        <div id="g-signin2"></div>
      </div>
    );
  }
}
