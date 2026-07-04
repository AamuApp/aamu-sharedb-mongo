var google = require('eslint-config-google');
var tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
var localConfig = require('./.eslintrc.js');

module.exports = [
  {
    ignores: [
      'coverage/**',
      '.eslintrc.js',
      'node_modules/**'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        afterEach: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin
    },
    rules: Object.assign({}, google.rules, localConfig.rules, {
      'block-spacing': 'off',
      'brace-style': 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
      'max-statements-per-line': 'off',
      'no-unused-vars': 'off',
      'operator-linebreak': 'off',
      'quote-props': 'off'
    })
  }
];
