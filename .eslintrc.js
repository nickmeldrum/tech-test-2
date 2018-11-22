module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        paths: ['.'],
      },
    },
  },
}
