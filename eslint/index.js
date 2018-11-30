module.exports = {
  'settings': {
    'react': {
      'version': '16.0', // React version, default to the latest React stable release
    },
    'propWrapperFunctions': [ 'forbidExtraProps' ]
  },
  'extends': [
    // Environment specific configurations
    './core/nodejs-commonjs.js',

    // ES6
    './core/ecmascript6.js',

    // Core rules by ESLint's own grouping
    './core/best-practices.js',
    './core/possible-errors.js',
    './core/stylistic-issues.js',
    './core/variables.js',

    // Plugins
    './plugin/jsdoc.js',
    './plugin/lodash.js',
    './plugin/react.js',
    './plugin/a11y.js'
  ],
};
