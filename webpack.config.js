require('dotenv').config();
const webpack = require('webpack');
const path = require('path');

const envsDefinePlugin = new webpack.DefinePlugin({
  'process.env.NEWS_API_KEY': JSON.stringify(process.env.NEWS_API_KEY),
  'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
  'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
  'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
  'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
  'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
  'process.env.MESSAGING_SENDER_ID': JSON
    .stringify(process.env.MESSAGING_SENDER_ID),
});

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
  entry: `${APP_DIR}/app.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          plugins: ['react-html-attrs', 'transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    envsDefinePlugin,
  ],
  node: {
    fs: 'empty',
  },
};
module.exports = config;
