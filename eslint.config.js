import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, // eslint:recommended
      tseslint.configs.recommended, // plugin:@typescript-eslint/recommended
      reactHooks.configs['recommended-latest'], // plugin:react-hooks/recommended
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      quotes: 'off',
      'jsx-quotes': ['warn', 'prefer-single'],
      'no-unreachable': 'error',
      camelcase: ['error', { properties: 'never' }],
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-unused-expressions': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn', 
      '@typescript-eslint/ban-ts-comment': 'warn',
      'prefer-const': 'warn',
      semi: 'error',
    },
  },
])
