module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jasmine: true
  },
  extends: [
    'eslint-config-standard',
    'plugin:promise/recommended',
    'plugin:node/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'space-before-function-paren': 'off'
  },
  plugins: [
    'node',
    'promise'
  ],
  globals: {
    AsyncScriptLoader: 'writeable'
  }
}
