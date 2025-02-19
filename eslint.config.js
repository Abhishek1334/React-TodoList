<<<<<<< HEAD
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
=======
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
>>>>>>> 9b2983eff353aef113a4ac3d842a57feb8e55593
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
<<<<<<< HEAD
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
=======
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
>>>>>>> 9b2983eff353aef113a4ac3d842a57feb8e55593
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
<<<<<<< HEAD
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
=======
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
>>>>>>> 9b2983eff353aef113a4ac3d842a57feb8e55593
        { allowConstantExport: true },
      ],
    },
  },
<<<<<<< HEAD
]
=======
];
>>>>>>> 9b2983eff353aef113a4ac3d842a57feb8e55593
