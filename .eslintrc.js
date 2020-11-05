module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jasmine: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "space-before-function-paren": "off",
  },
  plugins: [
    'html'
  ],
  globals: {
    "AsyncScriptLoader": "writeable"
  }
}
