module.exports = [
  {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: 'plugin:@typescript-eslint/recommended',
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json'
    },
    rules: {
      'prefer-const': 'error',
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      camelcase: 'off',
      'react/display-name': 0,
      semi: ['error', 'never'],
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      'import/prefer-default-export': 'off',
      'no-bitwise': 2,
      'no-underscore-dangle': 'off',
      'no-nested-ternary': 'off',
      'comma-dangle': 'off',
      'trailing-comma': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/return-await': 'off',
      // "@typescript-eslint/indent": ["error", 2],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/key-spacing': 'off',
      '@typescript-eslint/member-delimiter-style': 'off'
    }
  }
]
