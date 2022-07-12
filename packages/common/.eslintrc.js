module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest-formatting/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-unused-imports', 'simple-import-sort', 'json-format'],
  settings: {
    'json/sort-package-json': 'standard',
  },

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prefer-template': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['**/node_modules/**', 'tsconfig.json'],
}
