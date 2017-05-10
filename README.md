# Hottest News    [![Build Status](https://travis-ci.org/andela-iukwuoma/newsfeed.svg?branch=master)](https://travis-ci.org/andela-iukwuoma/newsfeed) [![Coverage Status](https://coveralls.io/repos/github/andela-iukwuoma/newsfeed/badge.svg?branch=ft-write-unit-tests-144580237)](https://coveralls.io/github/andela-iukwuoma/newsfeed?branch=ft-write-unit-tests-144580237) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

This application fetches the most popular and latest news headlines from over 70 of the highest-rated news sites in the world. It provides you with a simple interface to view all the headlines and be redirected to the full article in one click. News sources are arranged in categories and you can search for your favourites in the search box.

This project was built with React and uses the Flux Architecture. Data used in this application is received from [NewsAPI](https://newsapi.org) through API requests. 

## Table of Contents

  1. [Installation and setup](#installation-and-setup).
  1. [Technologies](#technologies)
  1. [FAQ](#faq)

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
