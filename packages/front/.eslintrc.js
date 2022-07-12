module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src', 'deploy-scripts'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'json/sort-package-json': 'standard',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-unused-imports', 'simple-import-sort', 'json-format', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-template': 'error',
    'no-unused-vars': ['warn', { ignoreRestSiblings: true, args: 'none' }],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['!@mui/material/*', '!@mui/material/test-utils/*'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
  ignorePatterns: ['**/node_modules/**', 'tsconfig.json'],
}
