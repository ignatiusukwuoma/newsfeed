const webpack = require('webpack');
const path = require('path');
const DotEnvPlugin = require('dotenv-webpack');

const dotenvPlugin = new DotEnvPlugin({
  path: '.env',
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
    dotenvPlugin,
  ],
  node: {
    fs: 'empty',
  },
};
module.exports = config;
