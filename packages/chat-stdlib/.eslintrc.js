module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
    {
      files: ['tests/**/*.ts'],
      env: {
        node: true,
        jest: true,
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'prefer-const': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-params': 'off',
      },
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {},
}
