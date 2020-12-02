const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { rootDir } = require('./webpack.const');

module.exports = {
  context: rootDir,
  mode: 'development',
  entry: {
    app: ['babel-polyfill', 'src/index.js'],
  },
  output: {
    filename: '[name].bundle.[chunkhash].js',
    path: path.resolve(rootDir, 'build'),
    publicPath: '/',
    sourceMapFilename: '[name].bundle.[chunkhash].map',
  },
  module: {
    rules: [
      {
        test: /.+\.j(s|sx)$/,
        exclude: [/(node_modules)/, /.+\.min\.js$/],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // options: {
                      // },
                    },
                  ],
                ],
              },
            },
          },
        ],
        include: [path.resolve(rootDir)],
        exclude: [path.resolve(rootDir, 'node_modules')],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|map)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    modules: ['.', path.resolve(rootDir, 'node_modules')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Template App',
      template: 'src/index.tpl.html',
    }),
  ],
};
