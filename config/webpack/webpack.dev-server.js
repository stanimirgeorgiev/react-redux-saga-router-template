const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const baseWebpack = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { rootDir } = require('./webpack.const');
const REMOTE_API = 'https://jsonplaceholder.typicode.com/';

module.exports = merge(baseWebpack, {
  mode: 'development',
  output: {
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].bundle.map',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: ['/'],
    publicPath: 'http://localhost:3000/',
    writeToDisk: true,
    compress: true,
    port: 3000,
    injectHot: true,
    disableHostCheck: true,
    liveReload: true,
    open: {
      app: ['Chrome', '--remote-debugging-port=9222', '--user-data-dir=%programData%/vscode-chrome-debug-userdatadir'],
    },
    historyApiFallback: {
      index: 'index.html',
    },
    proxy: {
      '/api/': {
        target: REMOTE_API,
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(`${rootDir}/src`, 'index.tpl.html'),
      filename: path.join(rootDir, 'build/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin({ template: path.join(`${rootDir}/src`, 'index.tpl.html') }),
  ],
  parallelism: 11,
  cache: true,
  watch: true,
});
