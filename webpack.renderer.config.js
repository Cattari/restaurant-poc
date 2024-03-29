const webpack = require('webpack');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  target: 'electron-renderer',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  // plugins: [
  //   new webpack.ExternalsPlugin('commonjs', [
  //     'electron'
  //   ]),
  // ]
};
