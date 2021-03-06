module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': 'off',
    'block-scoped-var': 'off',
    'class-methods-use-this': 'off',
    // eslint-disable-next-line no-magic-numbers
    complexity: ['warn', 14],
    'consistent-return': 'off',
    curly: 'error',
    'default-case': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    eqeqeq: 'error',
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'off',
    'no-extra-bind': 'off',
    'no-extra-label': 'off',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'off',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'off',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1, 2, 10, 1024],
        enforceConst: true,
      },
    ],
    'no-multi-spaces': 'off',
    'no-multi-str': 'off',
    'no-native-reassign': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-wrappers': 'off',
    'no-octal': 'error',
    'no-octal-escape': 'off',
    'no-param-reassign': 'off',
    'no-proto': 'off',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-throw-literal': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-concat': 'off',
    'no-useless-escape': 'off',
    'no-useless-return': 'off',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    radix: ['error', 'as-needed'],
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'outside'],
    yoda: ['error', 'never', { onlyEquality: true }],
  },
};
