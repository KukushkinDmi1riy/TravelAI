import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    files: ['client/src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      ...pluginReactConfig.rules,
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintConfigPrettier,
  {
    ignores: [
      'dist',
      'node_modules',
      '.husky',
      'client/dist',
      'client/node_modules',
      'server',
    ],
  },
];
