# Hottest News    [![Build Status](https://travis-ci.org/andela-iukwuoma/newsfeed.svg?branch=master)](https://travis-ci.org/andela-iukwuoma/newsfeed) [![Coverage Status](https://coveralls.io/repos/github/andela-iukwuoma/newsfeed/badge.svg?branch=develop)](https://coveralls.io/github/andela-iukwuoma/newsfeed?branch=develop) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)]() [![Code Climate](https://codeclimate.com/github/andela-iukwuoma/newsfeed/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
This application fetches the most popular and latest news headlines from over 70 of the highest-rated news sites in the world. It provides you with a simple interface to view all the headlines and be redirected to the full article in one click. News sources are arranged in categories and you can search for your favourites in the search box.

This project is built with React using the Flux Architecture. Code is written in ES2015, Babel is used to transpile down to ES5, SCSS is used to implement all custom styling, and Webpack is used to bundle all modules in the project and convert SCSS to CSS. Data is received from [NewsAPI](https://newsapi.org) through API requests. Authentication is made via Firebase Google Authentication. [Airbnb](https://github.com/airbnb/javascript) styleguide is used and configured in my .eslintrc to expose and flag incorrect ES6 syntax. HoundCI checks forstyle violations in PRs and TravisCI ensure that all test pass. The app is tested using Mocha test runner with Chai, Enzyme and Chai-Enzyme.

## Installation and setup

To run this project on your computer,
- **Make sure you have NodeJS and NPM installed**

- **Open a terminal/command prompt** on your computer and `cd` into your preferred path/location.

- **Clone this repo**:

```bash
git clone https://github.com/andela-iukwuoma/newsfeed.git
```

- **Install dependencies**:

```bash
npm install
```

- **Create a Firebase project**: This project uses [Firebase Authentication](https://firebase.google.com/docs/auth/) for user authentication, so you'll need to create a 
Firebase project. Please visit [this link](https://firebase.google.com/docs/web/setup) for instructions on creating 
a Firebase project. Click on `Add Firebase to your web app` in your Firebase console to get your firebase initialization keys.

- **Configure the project with Your Firebase Keys**: In the root of this project, create a file
and name it `.env`. Then, open the `firebaseConfig.js` file in the `app` folder of this project (inside `src`) and name each key in the `firebaseConfig.js` file with the corresponding value in your firebase initialisation keys. Example:

```bash
AUTH_DOMAIN=newsfeed-192201.firebaseapp.com
```

- **Run the project**: This will run the project on your computer so that you can browse it yourself. In the 
terminal/command prompt, enter the following command:

```bash
npm start
```

- **Open a web browser of your choice and visit `http://localhost:7000`. 

- **Test the application**: The application is tested using Chai, Chai-Enzyme, Enzyme and Mocha as the test runner. To test the app, run:

```bash
npm test
```

## Technologies

This project uses:
- ECMAScript 6: The newest version of Javascript with 
next-generation features like arrow functions, generators, enhanced object literals, 
spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for more details.

- [NodeJS](https://nodejs.org): A server-side JavaScript runtime engine built 
on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building 
web apps. See [this link](https://nodejs.org) for more details.

- [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/react-dom.html): 
Developed by Facebook and used for building web pages that are structured as a collection of 
components. These components are kept as independent as possible. See [this link](https://facebook.github.io/react/).

- [The Flux architecture](https://facebook.github.io/flux/): A design architecture for building stable 
web apps with a unidirectional flow of data. Also developed by Facebook. See [this link](https://facebook.github.io/flux/) 
for details.

- [Firebase Authentication](https://firebase.google.com/): Provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.

## Limitations

- This version of has the following limitations:

* Full articles can not be opened and read within the application.
* Users cannot create a list of favorite articles

## FAQ

- **What if I want to use another port?**

That's easy. In the root of the project. create a file named `.env` and add the following line to it:

```bash
PORT=<your_desired_port>
```

where <your\_desired\_port> is the port you want to use. So, if you want to use port `9000`, you will write:

```bash
PORT=9000
```
- **How can I contribute?**

There are two major ways to contribute:

- If you find bugs in the application, create a `New Issue` and let me know about it.

- If you would like to add additional features to this application, fork this repository, make necessary changes and create a Pull Request. Please make sure that all Hound suggestions are implemented and Travis CI passes.

## Liense

**The MIT License**