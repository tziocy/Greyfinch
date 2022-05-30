module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'simple-import-sort',
    'prettier',
    'jsx-a11y',
  ],
  rules: {
    'import/prefer-default-export': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: [
          'invalidHref',
          'preferButton',
        ],
        components: [
          'Link',
        ],
        specialLink: [
          'hrefLeft',
          'hrefRight',
        ],
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        paths: [
          'src',
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  root: true,
};
