const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const baseWebpack = require('./webpack.config');

module.exports = merge(baseWebpack, {
  mode: 'production',
  optimization: {
    mangleWasmImports: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          ecma: 5,
          warnings: false,
          parse: {},
          compress: {
            drop_console: true, // eslint-disable-line camelcase
          },
          mangle: {
            properties: false,
            toplevel: true,
          },
          module: false,
          output: {
            comments: false,
            beautify: false,
          },
          toplevel: false,
          nameCache: {},
          ie8: false,
          keep_classnames: undefined, // eslint-disable-line camelcase
          keep_fnames: true, // eslint-disable-line camelcase
          safari10: true,
        },
      }),
    ],
  },
});
