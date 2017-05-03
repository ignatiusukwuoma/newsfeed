[![Build Status](https://travis-ci.org/andela-iukwuoma/newsfeed.svg?branch=master)](https://travis-ci.org/andela-iukwuoma/newsfeed)
[![Coverage Status](https://coveralls.io/repos/github/andela-iukwuoma/newsfeed/badge.svg?branch=ft-write-unit-tests-144580237)](https://coveralls.io/github/andela-iukwuoma/newsfeed?branch=ft-write-unit-tests-144580237)

# Welcome

Welcome to Hot News! Get the most popular and latest news headlines from 70 of the highest rated news sites in the world. HotNews provides you with a simple interface to view the headlines and be redirected to the full article in one click. News sources are arranged in categories and you can search for your favourites in the search box.

## Table of Contents

  1. [Tech stack](#tech-stack)
  1. [Installation and setup](#installation-and-setup).
  1. [FAQ](#faq)

## Tech stack

This project uses a host of modern technologies. The core ones are:
- ECMAScript 6: Also known as ES2015, the newest version of Javascript with 
next-generation features like arrow functions, generators, enhanced object literals, 
spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.

- [NodeJS](https://nodejs.org): NodeJS is a server-side JavaScript runtime engine built 
on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building 
web apps. Please visit [this link](https://nodejs.org) for more details.

- [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/react-dom.html): 
These were developed by Facebook and are used for building web pages that are structured as a collection of 
components. These components are kept as independent as possible. See [this link](https://facebook.github.io/react/).

- [The Flux architecture](https://facebook.github.io/flux/): This is a design architecture for building stable 
web apps with, among other things, a unidirectional flow of data. See [this link](https://facebook.github.io/flux/) 
for details.

- [Firebase](https://firebase.google.com/): This project makes use of various components of 
[the Firebase suite](https://firebase.google.com/), including Firebase Authentication.

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

- **Create a Firebase project**: This project uses [Firebase Authentication Admin SDK](https://firebase.google.com/docs/auth/admin/) on the server for user authentication, so you'll need to create a 
Firebase project. Please visit [this link](https://firebase.google.com/docs/web/setup) for instructions on creating 
a Firebase project and [this link](https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app) for 
how to add the Firebase Authentication Admin SDK to your project. 

- **Configure the project with your Admin SDK**: In the root of this project, create a directory/folder 
and name it `privateFiles`. Then, move the file with your Admin SDK private key (from the step above) 
into that directory/folder and rename the file `firebaseAdminServiceAccount.json`.


- **Run the project**: This will run the project on your computer so that you can browse it yourself. In the 
terminal/command prompt, enter the following command:

```bash
npm start
```

- **Open a web browser of your choice and visit `http://localhost:7000`. 

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