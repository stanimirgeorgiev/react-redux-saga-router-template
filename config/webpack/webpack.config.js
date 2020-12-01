const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { rootDir } = require('./webpack.const');

module.exports = {
    context: rootDir,
    entry: {
        app: ['babel-polyfill', 'src/index.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Simple Test App',
            template: 'src/index.tpl.html',
        }),
    ],
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(rootDir, 'build'),
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
        modules: [
            '.',
            // path.resolve(rootDir, '../test', 'js'),
            path.resolve(rootDir, 'node_modules'),
        ],
    },
    mode: 'development',
};
