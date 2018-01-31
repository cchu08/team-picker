require("babel-core/register");
require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    './client/src/ClientApp.jsx'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/client/public'),
    publicPath: '/client/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};