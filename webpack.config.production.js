'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.browser': true
  }),
  new webpack.IgnorePlugin(/^form-data/),
  new webpack.IgnorePlugin(/^node-fetch/)
];

module.exports = config;
