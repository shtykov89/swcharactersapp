module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'sort-keys-fix',
    'typescript-sort-keys',
    'sort-destructure-keys',
    'simple-import-sort',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['PascalCase', 'camelCase', 'snake_case', 'UPPER_CASE'],
      },
    ],
    'react/require-default-props': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'default-param-last': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': 'warn',
    'react/sort-comp': [
      'error',
      { order: ['static-methods', 'lifecycle', 'render', 'everything-else'] },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^[^.]'],
          ['graphql/', 'app/', 'pages/'],
          ['shared/', 'widgets/'],
          ['constants/'],
          ['^\\.'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
    // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': 'warn',

    // https://github.com/leo-buneev/eslint-plugin-sort-keys-fix
    'sort-keys-fix/sort-keys-fix': ['warn', 'asc', { caseSensitive: true }],

    // https://github.com/infctr/eslint-plugin-typescript-sort-keys/blob/master/docs/rules/interface.md
    'typescript-sort-keys/interface': 'warn',

    // https://github.com/infctr/eslint-plugin-typescript-sort-keys/blob/master/docs/rules/string-enum.md
    'typescript-sort-keys/string-enum': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.d.ts',
          '.enum.ts',
          '.types.ts',
          '.mock.ts',
          '.enum.ts',
          '.constants.ts',
          '.tsx',
        ],
      },
    },
  },
};
