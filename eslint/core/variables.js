module.exports = {
  'rules': {
    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { 'typeof': true }],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'no-use-before-define': 'error',
  },
};
