const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Root path for this project
const ROOT = __dirname;


module.exports = {
  context: ROOT,
  entry: {
    app: ['babel-polyfill', './index.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Test App',
      template: './index.tpl.html',
    })
  ],
  output: {
    filename: '[name].bundle.[chunkhash].js',
    path: path.resolve(ROOT, './webapp'),
    publicPath: '/',
    sourceMapFilename: '[name].bundle.[chunkhash].map'
  },
  module: {
    rules: [
      {
        test: /.+\.js$/,
        exclude: [/(node_modules)/, /.+\.min\.js$/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          }
        ],
        include: [
          path.resolve(__dirname, ROOT, '/**')
        ],
        exclude: [
          path.resolve(__dirname, ROOT, 'node_modules'),
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|map)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    modules: [
      '.',
      // path.resolve(ROOT, 'test', 'js'),
      path.resolve(ROOT, 'node_modules'),
    ]
  },
  mode: 'development'
};