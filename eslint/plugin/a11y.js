module.exports = {
  'plugins': [
    'jsx-a11y',
  ],
  'extends': [
    'plugin:jsx-a11y/recommended'
  ],
  'rules': {
    'jsx-a11y/tabindex-no-positive': 'off',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
  }
};
