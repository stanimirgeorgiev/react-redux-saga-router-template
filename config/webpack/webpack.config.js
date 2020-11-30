const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = __dirname;

module.exports = {
    context: ROOT,
    entry: {
        app: ['babel-polyfill', '../index.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Simple Test App',
            template: '../index.tpl.html',
        }),
    ],
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(ROOT, '../webapp'),
        publicPath: '/',
        sourceMapFilename: '[name].bundle.[chunkhash].map',
    },
    module: {
        rules: [
            {
                test: /.+\.js$/,
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
                use: ['style-loader', 'css-loader'],
                include: [path.resolve(ROOT, '../')],
                exclude: [path.resolve(ROOT, '../node_modules')],
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
        modules: [
            '.',
            // path.resolve(ROOT, '../test', 'js'),
            path.resolve(ROOT, '../node_modules'),
        ],
    },
    mode: 'development',
};
