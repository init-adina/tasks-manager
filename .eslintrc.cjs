module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  plugins: ["@typescript-eslint", "react-refresh", "import", "prettier"],
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["build", ".eslintrc.cjs"],

  parser: "@typescript-eslint/parser", // No version here

  parserOptions: {
    project: "./tsconfig.json", // Make sure the project path is correct
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module",
  },

  globals: {
    browser: "readonly",
  },

  settings: {
    "import/resolver": {
      typescript: {},
    },
  },

  rules: {
    "import/no-named-as-default": 0,
    "import/named": 0,

    "no-empty": 0,
    "@typescript-eslint/no-explicit-any": "off",

    "react-refresh/only-export-components": 0,
    "prettier/prettier": "error",

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // Игнорировать параметры, начинающиеся с _
        varsIgnorePattern: "^_", // Игнорировать переменные, начинающиеся с _
      },
    ],

    "@typescript-eslint/no-explicit-any": 0,

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        jsx: "never",
        tsx: "never",
        scss: "never",
      },
    ],
    // Optionally adjust or disable rules here if needed
  },
};
