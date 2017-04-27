const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://127.0.0.1:7000/auth/google/callback'
},
(accessToken, refreshToken, profile, cb) => {
  // User.findOrCreate({ googleId: profile.id }, (err, user) => cb(err, user));
  cb(null, profile);
}
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

const app = express();
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(passport.initialize());
app.use(passport.session());

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');
// }

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.status(200).json({
    status: 'success',
    data: req.user
  }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/auth/google');
});

app.listen(7000, () => {
  console.log('Application listening on Port 7000');
});
