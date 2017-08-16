module.exports = {
  plugins: [
    'react'
  ],
  extends: 'airbnb',
  rules: {
    'prefer-arrow-callback': 'off',
    'space-before-function-paren': 'off',
    'func-names': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'guard-for-in': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',

    'max-len': ["error", 160],
    'array-bracket-spacing': [ 'error', 'always' ],

    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],

    'jsx-a11y/href-no-hash': 'off',
    'react/require-default-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true,
    }
  },
  env: {
    browser: true,
  }
};
