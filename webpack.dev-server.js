const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('./webpack.config.js');

const cleanAfterBuild = {
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ])
  ]
};

const ROOT = __dirname;
const REMOTE_API = 'https://jsonplaceholder.typicode.com/';

module.exports = merge(cleanAfterBuild,config, {
  devtool: 'eval-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT, './dist'),
    sourceMapFilename: '[name].bundle.map'
  },
  devServer: {
    contentBase: ['./'],
    port: 3000,
    proxy: {
      '/api/': {
        target: REMOTE_API,
        secure: false
      }
    }
  },
  parallelism: 7,
  cache: true,
  watch: true,
});