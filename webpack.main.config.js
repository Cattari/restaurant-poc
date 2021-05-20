// const webpack = require('webpack')
const nodeModules = {
  // 'sqlite3':'commonjs sqlite3',
  'knex': 'commonjs knex'  // this will tell webpack how to treat knex module
};

module.exports = {
  target: 'electron-main',
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  externals: nodeModules,
};
