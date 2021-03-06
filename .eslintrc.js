module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        'jest/globals': true
    },
    extends: [
        'airbnb-base',
    ],
    plugins: ['jest'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'no-restricted-properties': 0
    },
};